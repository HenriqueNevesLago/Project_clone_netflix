/* eslint-disable no-console */
import { Result } from './Result'
import { UseCaseError } from './UseCaseError'

export namespace AppError {
  export class UnexpectedError extends Result<UseCaseError> {
    public constructor(err: any) {
      super(false, {
        message: 'generic_error',
        details: err?.response,
        httpCode: err?.status,
        error: err,
      } as UseCaseError)
      console.log(`[AppError]: An unexpected error occurred`)
      console.error(err)
    }

    public static create(err: any): UnexpectedError {
      return new UnexpectedError(err)
    }
  }
  export class TimeoutError extends Result<UseCaseError> {
    public constructor(err: any) {
      super(false, {
        message: 'timeout',
        details: err?.message,
        httpCode: 502,
        error: err,
      } as UseCaseError)
      console.log(`[AppError]: A timeout error occurred`)
      console.error(err)
    }

    public static create(err: any): TimeoutError {
      return new TimeoutError(err)
    }
  }
  // export class DataNotFound extends Result<UseCaseError> {
  //   public constructor(err: any) {
  //     super(false, {
  //       code: ErrorCodeEnum.DataNotFound,
  //       message: 'Data not found',
  //       httpCode: 404,
  //       error: err,
  //     } as UseCaseError)
  //   }

  //   public static create(err: any): DataNotFound {
  //     return new DataNotFound(err)
  //   }
  // }
  // export class AccessDeniedError extends Result<UseCaseError> {
  //   public constructor() {
  //     super(false, {
  //       code: ErrorCodeEnum.AccessDenied,
  //       message: 'Access Denied',
  //     } as UseCaseError)
  //   }

  //   public static create(): AccessDeniedError {
  //     return new AccessDeniedError()
  //   }
  // }
  // export class BadRequestError extends Result<UseCaseError> {
  //   public constructor() {
  //     super(false, {
  //       code: ErrorCodeEnum.BadRequestError,
  //       message: 'Bad Request',
  //     } as UseCaseError)
  //   }

  //   public static create(): BadRequestError {
  //     return new BadRequestError()
  //   }
  // }
}
