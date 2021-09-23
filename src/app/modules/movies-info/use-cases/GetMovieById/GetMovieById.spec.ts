import { getMovieByIdUseCase } from '.';

describe('Use Case: MoviesInfo/GetMovieByIdUseCase', () => {
  beforeAll(() => {});

  test('My first test', async () => {
    const res = await getMovieByIdUseCase.execute({
      idMovie: 512,
    }
  );

    expect(res.isRight()).toBe(true);
    expect(res.value.getValue()).toBeDefined();

    if (res.isRight()) {
      console.log(res.value.getValue());
    }
  });
});
