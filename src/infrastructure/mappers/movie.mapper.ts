import type {FullMovie, Movie, MovieImage} from '../../core/entitites/movie.entity';
import type {
  MovieDBMovieResponse,
  MovieDBFullMovieResponse,
  MovieDBImage,
} from '../interfaces/movie-db.responses';

export class MovieMapper {
  static PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';

  static fromMovieResultToMovieEntity(result: MovieDBMovieResponse): Movie {
    return {
      id: result.id,
      poster: `${MovieMapper.PATH_IMAGE}${result.poster_path}`,
      title: result.title,
    };
  }

  static fromFullMovieResultToFullMovieEntity(result: MovieDBFullMovieResponse): FullMovie {
    return {
      backdrop: `${MovieMapper.PATH_IMAGE}${result.backdrop_path}`,
      budget: result.budget,
      collection: result.belongs_to_collection
        ? {
            id: result.belongs_to_collection.id,
            name: result.belongs_to_collection.name,
            poster: `${MovieMapper.PATH_IMAGE}${result.belongs_to_collection.poster_path}`,
            backdrop: `${MovieMapper.PATH_IMAGE}${result.belongs_to_collection.backdrop_path}`,
          }
        : null,
      description: result.overview,
      duration: result.runtime,
      genres: result.genres.map(genre => genre.name),
      homepage: result.homepage,
      id: result.id,
      isRestricted: result.adult,
      poster: `${MovieMapper.PATH_IMAGE}${result.poster_path}`,
      productionCompanies: result.production_companies.map(company => company.name),
      rating: result.vote_average,
      releaseDate: new Date(result.release_date),
      status: result.status,
      title: result.title,
    };
  }

  static fromMovieDBImageToEntity(result: MovieDBImage): MovieImage {
    return {
      url: `${MovieMapper.PATH_IMAGE}${result.file_path}`,
      asp_ratio: result.aspect_ratio,
    };
  }
}
