import { Movies } from '../models/Movies'
import { HttpAdapter } from '@/app/core/adapter/HttpAdapter';

type Response<T> = {
  data: T;
};

export interface IMoviesService {
  getMovieById(id: number): Promise<Movies>;
  getPopularMovies(): Promise<Movies[]>;
}
export class MoviesService implements IMoviesService {
  private httpAdapter: HttpAdapter;

  constructor(httpAdapter: HttpAdapter) {
    this.httpAdapter = httpAdapter;
  }

  async getMovieById(id: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-BR&api_key=8931691c8d7464b5c3d8a81a8cf94e4f`;

    const res: Response<Movies> = await this.httpAdapter.get({url});

    return res.data;
  }
  async getPopularMovies(): Promise<Movies[]> {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc/language=pt-BR&api_key=8931691c8d7464b5c3d8a81a8cf94e4f`;

    const res: Response<Movies[]> = await this.httpAdapter.get({url});

    return res.data;
  }
}
