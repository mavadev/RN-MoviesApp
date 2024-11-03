import type {Cast, Media} from '../../core/entitites/media.entity';
import type {MovieDBMediaCast, MovieDBMediaResponse} from '../interfaces/media-db.responses';

export class MediaMapper {
  static PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';

  static fromTvSerieResultToEntity(result: MovieDBMediaResponse): Media {
    return {
      id: result.id,
      title:
        result.media_type === 'movie'
          ? result.title || 'Título no disponible'
          : result.name || 'Título no disponible',
      poster: `${MediaMapper.PATH_IMAGE}${result.poster_path}`,
      backdrop: `${MediaMapper.PATH_IMAGE}${result.backdrop_path}`,
    };
  }

  static fromMovieDBCastToEntity(actor: MovieDBMediaCast): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? 'No character',
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
