import { UseCaseError } from '@/app/core/base/UseCaseError';
import { Result } from '@/app/core/base/Result';

export namespace GetPopularMoviesErrors {
  export class NotFoundError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Couldn't find the item.`,
      } as UseCaseError);
    }
  }
}
