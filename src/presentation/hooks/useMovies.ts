import {useEffect, useState} from 'react';
import {movieDBFetcher} from '@adapters/movieDB.adapter';
import {getMoviesUseCase} from '@use-cases/movies/get-movies.use-case';
import type {Media} from '@entitites/media.entity';

export enum MoviePaths {
  NowPlaying = '/movie/now_playing',
  Popular = '/movie/popular',
  TopRated = '/movie/top_rated',
  Upcoming = '/movie/upcoming',
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [trending, setTrending] = useState<Media[]>();
  const [nowPlaying, setNowPlaying] = useState<Media[]>([]);
  const [popular, setPopular] = useState<Media[]>([]);
  const [topRated, setTopRated] = useState<Media[]>([]);
  const [upComing, setUpComing] = useState<Media[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const trendingAllPromise = getMoviesUseCase(movieDBFetcher, '/trending/all/week');
    const nowPlayingPromise = getMoviesUseCase(movieDBFetcher, MoviePaths.NowPlaying);
    const popularPromise = getMoviesUseCase(movieDBFetcher, MoviePaths.Popular);
    const topRatedPromise = getMoviesUseCase(movieDBFetcher, MoviePaths.TopRated);
    const upcomingPromise = getMoviesUseCase(movieDBFetcher, MoviePaths.Upcoming);

    const [trendingMovies, nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies] =
      await Promise.all([
        trendingAllPromise,
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

    setTrending(trendingMovies);
    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpComing(upComingMovies);

    setIsLoading(false);
  };

  const updateMovies = async (category: MoviePaths, page: number) => {
    const newMovies = await getMoviesUseCase(movieDBFetcher, category, {page});

    switch (category) {
      case MoviePaths.NowPlaying:
        setNowPlaying(prev => [...prev, ...newMovies]);
        break;
      case MoviePaths.Popular:
        setPopular(prev => [...prev, ...newMovies]);
        break;
      case MoviePaths.TopRated:
        setTopRated(prev => [...prev, ...newMovies]);
        break;
      case MoviePaths.Upcoming:
        setUpComing(prev => [...prev, ...newMovies]);
        break;
      default:
        break;
    }
  };

  return {
    trending,
    nowPlaying,
    popular,
    topRated,
    upComing,
    isLoading,

    // Métodos
    updateMovies,
  };
};
