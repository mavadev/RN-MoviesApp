import {useEffect, useState} from 'react';
import {getMoviesUseCase} from '../../core/use-cases';
import type {Movie} from '../../core/entitites/movie.entity';
import {MovieList} from '../../core/constants/movieList.enum';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    // Promesas
    const nowPlayingPromise = getMoviesUseCase(movieDBFetcher, MovieList.NowPlaying);
    const popularPromise = getMoviesUseCase(movieDBFetcher, MovieList.Popular);
    const topRatedPromise = getMoviesUseCase(movieDBFetcher, MovieList.TopRated);
    const upcomingPromise = getMoviesUseCase(movieDBFetcher, MovieList.Upcoming);

    // Respuestas
    const [nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies] = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    // Asignación
    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpComing(upComingMovies);

    setIsLoading(false);
  };

  const updateMovies = async (category: MovieList, page: number) => {
    const newMovies = await getMoviesUseCase(movieDBFetcher, category, {page});

    switch (category) {
      case MovieList.NowPlaying:
        setNowPlaying(prev => [...prev, ...newMovies]);
        break;
      case MovieList.Popular:
        setPopular(prev => [...prev, ...newMovies]);
        break;
      case MovieList.TopRated:
        setTopRated(prev => [...prev, ...newMovies]);
        break;
      case MovieList.Upcoming:
        setUpComing(prev => [...prev, ...newMovies]);
        break;
      default:
        break;
    }
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upComing,

    // Métodos
    updateMovies,
  };
};
