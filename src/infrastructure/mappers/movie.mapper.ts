import type {
  MovieDBMovieResponse,
  MovieDBMovieDetailsResponse,
} from '../interfaces/movie-db.responses';
import type {MovieDetails} from '../../core/entitites/movie.entity';
import type {MovieDBImage} from '../interfaces/media-db.responses';
import type {Media, MediaImage} from '../../core/entitites/media.entity';

export class MovieMapper {
  static PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';

  static fromMovieResultToMovieEntity(result: MovieDBMovieResponse): Media {
    return {
      backdrop: `${MovieMapper.PATH_IMAGE}${result.backdrop_path}`,
      id: result.id,
      mediaType: 'movie',
      poster: `${MovieMapper.PATH_IMAGE}${result.poster_path}`,
      title: result.title,
    };
  }

  static fromFullMovieResultToFullMovieEntity(result: MovieDBMovieDetailsResponse): MovieDetails {
    return {
      budget: result.budget,
      backdrop: `${MovieMapper.PATH_IMAGE}${result.backdrop_path}`,
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
      companies: result.production_companies
        .filter(company => company.logo_path)
        .map(company => ({
          id: company.id,
          name: company.name,
          logo: company.logo_path ? `${MovieMapper.PATH_IMAGE}${company.logo_path}` : null,
        })),
      rating: result.vote_average,
      releaseDate: new Date(result.release_date),
      status: result.status,
      title: result.title,
    };
  }

  static fromMovieDBImageToEntity(result: MovieDBImage): MediaImage {
    return {
      url: `${MovieMapper.PATH_IMAGE}${result.file_path}`,
      asp_ratio: result.aspect_ratio,
    };
  }
}
