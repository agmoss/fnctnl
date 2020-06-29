import { Either, Left, Right, isLeft, isRight, match, fold } from '../either'

describe('Either', () => {
  const testr = (val: number): Either<string, boolean> => {
    if (val > 10) {
      return Left('Number too high!')
    } else {
      return Right(true)
    }
  }

  it('should be left', () => {
    const val = isLeft(testr(11))
    expect(val).toBe(true)
  })

  it('should be right', () => {
    const val = isRight(testr(9))
    expect(val).toBe(true)
  })

  it('right should be bool', () => {
    const val = match(
      testr(9),
      (left) => false,
      (right) => right
    )
    expect(val).toBe(true)
  })

  it('left should be error', () => {
    const val = match(
      testr(11),
      (left) => left,
      (right) => null
    )
    expect(val).toBe('Number too high!')
  })

  it('should fold right', () => {
    const val = fold<string | boolean, string, boolean>(
      (left: string) => left,
      (right: boolean) => right
    )(testr(9))
    expect(val).toBeTruthy()
  })
})
