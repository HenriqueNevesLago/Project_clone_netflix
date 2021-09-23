import { IMoviesService } from './../../services/MoviesService';
import { GetOriginalMoviesDTO } from './GetOriginalMoviesDTO';
import { UseCase } from '@/app/core/base/UseCase';
import { Result } from '@/app/core/base/Result';
import { left, right } from '@/app/core/base/Either';
import { AppError } from '@/app/core/base/AppError';

export class GetOriginalMoviesUseCase
  implements UseCase<null, GetOriginalMoviesDTO.Response>
{
  private movieService: IMoviesService;

  constructor(movieService: IMoviesService) {
    this.movieService = movieService;
  }

  public async execute(): Promise<GetOriginalMoviesDTO.Response> {
    try {
      const res = await this.movieService.getOriginalMovies()
      // @ts-ignore
      return right(Result.ok(res.results));
    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }
  }
}

