import {AxiosAdaptter} from '@adapters/http/axios.adapter';

export const movieDBFetcher = new AxiosAdaptter({
  baseUrl: 'https://api.themoviedb.org/3',
  params: {
    api_key: '7204da9e560ede55e46ceb41aa95c8ad',
    language: 'es',
  },
});
