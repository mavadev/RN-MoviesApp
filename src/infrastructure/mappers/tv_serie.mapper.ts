import type {MovieDBTvSerieDetailsResponse} from '@interfaces/tv_serie-db.responses';
import type {TvSerieDetails} from '@entities/tv_serie.entity';
import {MediaMapper} from './media.mapper';

export class TvSerieMapper {
  static PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';

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
      seasons: result.seasons
        .filter(media => media.poster_path)
        .map(media => MediaMapper.fromMediaResultToEntity(media, 'season')),
      status: result.status,
      type: result.type,
    };
  }
}
