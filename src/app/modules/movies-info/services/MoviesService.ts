import { MoviesCollection } from '../models/MoviesCollection'
import { HttpAdapter } from '@/app/core/adapter/HttpAdapter'

type Response<T> = {
  data: T
}

export interface IMoviesService {
  getMovieById(
    dto: MoviesCollection.GetMoviesById.Input
  ): Promise<MoviesCollection.GetMoviesById.Output>
  getPopularMovies(): Promise<MoviesCollection.GetMovies.Output>
  getOriginalMovies(): Promise<MoviesCollection.GetMovies.Output>
}
export class MoviesService implements IMoviesService {
  private httpAdapter: HttpAdapter

  constructor(httpAdapter: HttpAdapter) {
    this.httpAdapter = httpAdapter
  }

  async getMovieById(
    dto: MoviesCollection.GetMoviesById.Input
  ): Promise<MoviesCollection.GetMoviesById.Output> {
    const url = `https://api.themoviedb.org/3/movie/${dto}?language=pt-BR&api_key=8931691c8d7464b5c3d8a81a8cf94e4f`

    const res: Response<MoviesCollection.GetMoviesById.Output> =
      await this.httpAdapter.get({ url })

    return res.data
  }
  async getPopularMovies(): Promise<MoviesCollection.GetMovies.Output> {
    const url = `https://api.themoviedb.org/3/trending/all/week?language=pt-BR&api_key=8931691c8d7464b5c3d8a81a8cf94e4f`

    const res: Response<MoviesCollection.GetMovies.Output> =
      await this.httpAdapter.get({ url })

    return res.data
  }
  async getOriginalMovies(): Promise<MoviesCollection.GetMovies.Output> {
    const url = `https://api.themoviedb.org/3/discover/tv?with_network=213&language=pt-BR&api_key=8931691c8d7464b5c3d8a81a8cf94e4f`

    const res: Response<MoviesCollection.GetMovies.Output> =
      await this.httpAdapter.get({ url })

    return res.data
  }
}
