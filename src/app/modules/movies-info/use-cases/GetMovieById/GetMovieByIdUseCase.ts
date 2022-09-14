import { IMoviesService } from './../../services/MoviesService'
import { GetMovieByIdDTO } from './GetMovieByIdDTO'
import { UseCase } from '@/app/core/base/UseCase'
import { Result } from '@/app/core/base/Result'
import { left, right } from '@/app/core/base/Either'
import { AppError } from '@/app/core/base/AppError'

export class GetMovieByIdUseCase
  implements UseCase<GetMovieByIdDTO.Request, GetMovieByIdDTO.Response>
{
  constructor(private movieService: IMoviesService) {
    this.movieService = movieService
  }

  public async execute(
    req: GetMovieByIdDTO.Request
  ): Promise<GetMovieByIdDTO.Response> {
    try {
      const data = await this.movieService.getMovieById(req)
      const res = {
        title: data.title,
        vote_average: data.vote_average,
        release_date: data.release_date,
        overview: data.overview,
        genres: data.genres,
        poster_path: data.poster_path,
        backdrop_path: data.backdrop_path,
      }
      return right(Result.ok(res))
    } catch (err) {
      return left(new AppError.UnexpectedError(err))
    }
  }
}
