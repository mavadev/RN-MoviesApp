import {useEffect, useState} from 'react';
import {movieDBFetcher} from '@adapters/movieDB.adapter';

import {getTrendingAllUseCase} from '@use-cases/trending/get-trending-all.use-case';
import {getMoviesUseCase} from '@use-cases/movies/get-movies.use-case';
import {getTvSeriesUseCase} from '@use-cases/tv_series/get-series.use-case';

import type {Media} from '@entities/media.entity';

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

  const loadContent = async (category: ContentPaths, page: number) => {
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
        const newSeries = await getTvSeriesUseCase(movieDBFetcher, category, {page});
        setSeriesPopular(prev => [...prev, ...newSeries]);
        return;
      default:
        return;
    }
  };

  return {
    isLoading,
    trending,
    moviesPopular,
    seriesPopular,
    loadContent,
  };
};
