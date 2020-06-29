export enum Sides {
  left,
  right,
}

// Type defs
export type Left<T> = { side: Sides.left; value: T };
export type Right<T> = { side: Sides.right; value: T };
export type Either<L, R> = Left<L> | Right<R>;

// Guards
export const isLeft = <L>(val: any): val is Left<L> => {
  if ((val as Left<L>).side === Sides.left) return true
  return false
}

export const isRight = <R>(val: any): val is Right<R> => {
  if ((val as Right<R>).side === Sides.right) return true
  return false
}

// L & R constructors
export const Left = <L>(val: L): Left<L> => {
  return { value: val, side: Sides.left }
}

export const Right = <R>(val: R): Right<R> => {
  return { value: val, side: Sides.right }
}

// Extractor
export const match = <T, L, R>(
  val: Either<L, R>,
  left: (left: L) => T,
  right: (right: R) => T
) => {
  switch (val.side) {
    case Sides.left:
      return left(val.value)
    case Sides.right:
      return right(val.value)
  }
}

export function fold<T, L, R> (
  left: (left: L) => T,
  right: (right: R) => T
): (val: Either<L, R>) => T {
  return (val: Either<L, R>): T => {
    switch (val.side) {
      case Sides.left:
        return left(val.value)
      case Sides.right:
        return right(val.value)
    }
  }
}
