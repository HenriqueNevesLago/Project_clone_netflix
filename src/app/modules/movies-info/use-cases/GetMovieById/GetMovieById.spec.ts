import { getMovieByIdUseCase } from '.'

describe('Use Case: MoviesInfo/GetMovieByIdUseCase', () => {
  beforeAll(() => {})

  test('Test success- GetMovieByIdUseCase', async () => {
    const res = await getMovieByIdUseCase.execute(512)

    expect(res.isRight()).toBe(true)
    expect(res.value.getValue()).toBeDefined()

    if (res.isRight()) {
      console.log(res.value.getValue())
    }
  })
})
