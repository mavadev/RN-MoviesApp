import {useEffect, useState} from 'react';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {getTrendingAllUseCase} from '../../core/use-cases/trending/get-all.use-case copy';
import {getMoviesUseCase} from '../../core/use-cases';
import {getTvSeriesUseCase} from '../../core/use-cases/tv_series/get-series.use-case';
import type {Media} from '../../core/entitites/media.entity';

export enum ContentPaths {
  Trending = '/trending/all/week',
  MoviesPopular = '/movie/popular',
  TvSeriesPopular = '/tv/popular',
}

export const useContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [trending, setTrending] = useState<Media[]>([]);
  const [moviesPopular, setMoviesPopular] = useState<Media[]>([]);
  const [seriesPopular, setSeriesPopular] = useState<Media[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const trendingAllPromise = getTrendingAllUseCase(movieDBFetcher);
    const moviesPopularPromise = getMoviesUseCase(movieDBFetcher, ContentPaths.MoviesPopular);
    const tvSeriesPopularPromise = getTvSeriesUseCase(movieDBFetcher, ContentPaths.TvSeriesPopular);

    const [trendingResponse, moviesPopularResponse, seriesPopularResponse] = await Promise.all([
      trendingAllPromise,
      moviesPopularPromise,
      tvSeriesPopularPromise,
    ]);

    setTrending(trendingResponse);
    setMoviesPopular(moviesPopularResponse);
    setSeriesPopular(seriesPopularResponse);

    setIsLoading(false);
  };

  const updateContent = async (category: ContentPaths, page: number) => {
    switch (category) {
      // Trending
      case ContentPaths.Trending:
        const newTrending = await getTrendingAllUseCase(movieDBFetcher, {page});
        setTrending(prev => [...prev, ...newTrending]);
        return;
      // Movies
      case ContentPaths.MoviesPopular:
        const newMovies = await getMoviesUseCase(movieDBFetcher, category, {page});
        setMoviesPopular(prev => [...prev, ...newMovies]);
        return;
      case ContentPaths.TvSeriesPopular:
        setSeriesPopular(prev => [...prev, ...newMovies]);
        return;
      default:
        return;
    }
  };

  return {
    trending,
    moviesPopular,
    seriesPopular,
    isLoading,

    updateContent,
  };
};
