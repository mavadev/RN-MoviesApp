import type {Cast, Media, MediaImage} from '../../core/entitites/media.entity';
import type {
  MovieDBImage,
  MovieDBMediaCast,
  MovieDBMediaResponse,
} from '../interfaces/media-db.responses';

export class MediaMapper {
  static PATH_IMAGE = 'https://image.tmdb.org/t/p/w500';

  static fromMediaResultToEntity(
    result: MovieDBMediaResponse,
    type: Media['mediaType'] = 'movie',
  ): Media {
    const mediaType = result.media_type || type;

    return {
      id: result.id,
      mediaType,
      title:
        mediaType === 'movie'
          ? result.title || 'Título no disponible'
          : result.name || 'Título no disponible',
      poster: `${MediaMapper.PATH_IMAGE}${result.poster_path}`,
      backdrop: result.backdrop_path ? `${MediaMapper.PATH_IMAGE}${result.backdrop_path}` : null,
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

  static fromMovieDBImageToEntity(result: MovieDBImage): MediaImage {
    return {
      url: `${MediaMapper.PATH_IMAGE}${result.file_path}`,
      asp_ratio: result.aspect_ratio,
    };
  }
}
