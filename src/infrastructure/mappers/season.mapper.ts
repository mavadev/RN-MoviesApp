import {SeasonDetails} from '@entities/season.entity';
import {MovieDBSeasonDetailsResponse} from '@interfaces/season-db.responses';

export class SeasonMapper {
  static PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';

  static fromMovieDBSeasonDetailsToEntity(seasonDB: MovieDBSeasonDetailsResponse): SeasonDetails {
    return {
      id: seasonDB.id,
      name: seasonDB.name,
      airDate: seasonDB.air_date,
      description: seasonDB.overview,
      seasonNumber: seasonDB.season_number,
      poster: `${this.PATH_IMAGE}${seasonDB.poster_path}`,
      episodes: seasonDB.episodes.map(episode => ({
        id: episode.id,
        name: episode.name,
        airDate: episode.air_date,
        rating: episode.vote_average,
        description: episode.overview,
        number: episode.episode_number,
        image: `${this.PATH_IMAGE}${episode.still_path}`,
      })),
    };
  }
}
