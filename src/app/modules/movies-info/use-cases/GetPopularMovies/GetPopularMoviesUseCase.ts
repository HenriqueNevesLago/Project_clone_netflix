import { IMoviesService } from './../../services/MoviesService';
import { GetPopularMoviesDTO } from './GetPopularMoviesDTO';
import { UseCase } from '@/app/core/base/UseCase';
import { Result } from '@/app/core/base/Result';
import { left, right } from '@/app/core/base/Either';
import { AppError } from '@/app/core/base/AppError';

export class GetPopularMoviesUseCase
  implements UseCase<null, GetPopularMoviesDTO.Response>
{
  private movieService: IMoviesService;

  constructor(movieService: IMoviesService) {
    this.movieService = movieService;
  }

  public async execute(): Promise<GetPopularMoviesDTO.Response> {
    try {
      const res = await this.movieService.getPopularMovies()
      return right(Result.ok(res));
    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }
  }
}

