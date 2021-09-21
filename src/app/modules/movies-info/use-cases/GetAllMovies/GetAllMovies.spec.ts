import { getAllMoviesUseCase } from '.';

describe('Use Case: MoviesInfo/GetAllMoviesUseCase', () => {
  beforeAll(() => {});

  test('My first test', async () => {
    //TODO: put your logic
    const req: any = {}

    const res = await getAllMoviesUseCase.execute(req);

    expect(res.isRight()).toBe(true);
    expect(res.value.getValue()).toBeDefined();

    if (res.isRight()) {
      expect(res.value.getValue()).toBe('something');
    }
  });
});
