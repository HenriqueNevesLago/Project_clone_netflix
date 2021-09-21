import { GetAllMoviesDTO } from './GetAllMoviesDTO';
import { UseCase } from '@/app/core/base/UseCase';
import { Result } from '@/app/core/base/Result';
import { left, right } from '@/app/core/base/Either';
import { AppError } from '@/app/core/base/AppError';

export class GetAllMoviesUseCase
  implements UseCase<GetAllMoviesDTO.Request, GetAllMoviesDTO.Response>
{
  // TODO: Import your services here
  // private service: IService;

  // constructor(service: IService) {
  //  this.service = service;
  // }

  public async execute(
    req: GetAllMoviesDTO.Request
  ): Promise<GetAllMoviesDTO.Response> {
    try {
      // TODO: Put your logic here
      // const call: ServiceDTO.Method.Output = await this.service.method(queryInput);
      // const res: GetAllMoviesDTO.ResponseBody = call;

      // return right(Result.ok<GetAllMoviesDTO.ResponseBody>(res));
    } catch (err) {
      return left(new AppError.UnexpectedError(err));
    }
  }
}

