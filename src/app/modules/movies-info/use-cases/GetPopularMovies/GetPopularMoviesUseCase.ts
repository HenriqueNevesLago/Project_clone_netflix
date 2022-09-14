import { IMoviesService } from './../../services/MoviesService'
import { GetPopularMoviesDTO } from './GetPopularMoviesDTO'
import { UseCase } from '@/app/core/base/UseCase'
import { Result } from '@/app/core/base/Result'
import { left, right } from '@/app/core/base/Either'
import { AppError } from '@/app/core/base/AppError'

export class GetPopularMoviesUseCase
  implements UseCase<null, GetPopularMoviesDTO.Response>
{
  constructor(private movieService: IMoviesService) {
    this.movieService = movieService
  }

  public async execute(): Promise<GetPopularMoviesDTO.Response> {
    try {
      const data = await this.movieService.getPopularMovies()
      const res = data.results.map((i) => {
        return {
          title: i.title,
          vote_average: i.vote_average,
          release_date: i.release_date,
          overview: i.overview,
          seasons: i.seasons,
          genre_ids: i.genre_ids,
          poster_path: i.poster_path,
          backdrop_path: i.backdrop_path,
        }
      })
      return right(Result.ok(res))
    } catch (err) {
      return left(new AppError.UnexpectedError(err))
    }
  }
}
