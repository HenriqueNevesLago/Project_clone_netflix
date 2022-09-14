import { getOriginalMoviesUseCase } from '.';

describe('Use Case: MoviesInfo/GetOriginalMoviesUseCase', () => {
  beforeAll(() => {});

  test('Test success- GetOriginalMoviesUseCase', async () => {
    const res = await getOriginalMoviesUseCase.execute();

    expect(res.isRight()).toBe(true);
    expect(res.value.getValue()).toBeDefined();

    if (res.isRight()) {
      console.log(res.value.getValue());
      expect(res.value.getValue())
    }
  });
});
