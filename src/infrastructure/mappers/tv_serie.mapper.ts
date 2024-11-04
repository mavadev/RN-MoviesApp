import type {
  MovieDBTvSerieResponse,
  MovieDBTvSerieDetailsResponse,
} from '../interfaces/tv_serie-db.responses';
import type {Media} from '../../core/entitites/media.entity';
import type {TvSerieDetails} from '../../core/entitites/tv_serie.entity';

export class TvSerieMapper {
  static PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';

  static fromTvSerieResultToEntity(result: MovieDBTvSerieResponse): Media {
    return {
      backdrop: `${TvSerieMapper.PATH_IMAGE}${result.backdrop_path}`,
      id: result.id,
      mediaType: 'tv',
      poster: `${TvSerieMapper.PATH_IMAGE}${result.poster_path}`,
      title: result.name,
    };
  }

  static fromTvSerieDetailsResultToEntity(result: MovieDBTvSerieDetailsResponse): TvSerieDetails {
    return {
      id: result.id,
      title: result.name,
      poster: `${TvSerieMapper.PATH_IMAGE}${result.poster_path}`,
      backdrop: `${TvSerieMapper.PATH_IMAGE}${result.backdrop_path}`,
      description: result.overview,
      firstDate: result.first_air_date,
      genres: result.genres.map(genre => genre.name),
      homepage: result.homepage,
      companies: result.production_companies
        .filter(company => company.logo_path)
        .map(company => ({
          id: company.id,
          name: company.name,
          logo: company.logo_path ? `${TvSerieMapper.PATH_IMAGE}${company.logo_path}` : null,
        })),
      rating: result.vote_average,
      seasons: result.seasons.map(season => ({
        airDate: season.air_date,
        description: season.overview,
        episodeCount: season.episode_count,
        id: season.id,
        poster: `${TvSerieMapper.PATH_IMAGE}${season.poster_path}`,
        rating: season.vote_average,
        seasonNumber: season.season_number,
        title: season.name,
      })),
      status: result.status,
      type: result.type,
    };
  }
}
