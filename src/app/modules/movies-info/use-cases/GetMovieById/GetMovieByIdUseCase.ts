import { IMoviesService } from './../../services/MoviesService';
import { GetMovieByIdDTO } from './GetMovieByIdDTO';
import { UseCase } from '@/app/core/base/UseCase';
import { Result } from '@/app/core/base/Result';
import { left, right } from '@/app/core/base/Either';
import { AppError } from '@/app/core/base/AppError';

export class GetMovieByIdUseCase
  implements UseCase<GetMovieByIdDTO.Request, GetMovieByIdDTO.Response>
{
  private movieService: IMoviesService;

  constructor(movieService: IMoviesService) {
    this.movieService = movieService;
  }

  public async execute(
    req: GetMovieByIdDTO.Request
  ): Promise<GetMovieByIdDTO.Response> {
    try {
      const res = await this.movieService.getMovieById(req.idMovie)
      return right(Result.ok(res));
    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }
  }
}

