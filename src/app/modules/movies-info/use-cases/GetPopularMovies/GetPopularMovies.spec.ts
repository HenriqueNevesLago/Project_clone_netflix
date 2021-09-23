import { getPopularMoviesUseCase } from '.';

describe('Use Case: MoviesInfo/GetPopularMoviesUseCase', () => {
  beforeAll(() => {});

  test('My first test', async () => {
    const res = await getPopularMoviesUseCase.execute();

    expect(res.isRight()).toBe(true);
    expect(res.value.getValue()).toBeDefined();

    if (res.isRight()) {
      console.log(res.value.getValue());
      expect(res.value.getValue())
    }
  });
});
