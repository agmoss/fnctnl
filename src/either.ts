/**
 * @name Sides
 * @description Two sides of an Either
 */
export enum Sides {
  left,
  right,
}

/**
 * @name Left
 * @description Interface of error result
 */
export interface Left<T> {
  side: Sides.left;
  value: T;
}

/**
 * @name Right
 * @description Interface of success result
 */
export interface Right<T> {
  side: Sides.right;
  value: T;
}

/**
 * @name Either
 * @description Either type represents values with two possibilities: Either l r is either Left l or Right r
 */
export type Either<L, R> = Left<L> | Right<R>;

/**
 * @name isLeft
 * @description Type predicate guard to check if value is Left
 * @param val {any}
 * @returns {boolean}
 */
export const isLeft = <L>(val: any): val is Left<L> => {
  if ((val as Left<L>).side === Sides.left) return true
  return false
}

/**
 * @name isRight
 * @description Type predicate guard to check if value is Right
 * @param val {any}
 * @returns {boolean}
 */
export const isRight = <R>(val: any): val is Right<R> => {
  if ((val as Right<R>).side === Sides.right) return true
  return false
}

/**
 * @name left
 * @description Construct a Left
 * @param {L} val The Left value
 * @returns {Left<L>} Left type
 */
export const left = <L>(val: L): Left<L> => {
  return { value: val, side: Sides.left }
}

/**
 * @name right
 * @description Construct a Right
 * @param {L} val The right value
 * @returns {Right<L>} Right type
 */
export const right = <R>(val: R): Right<R> => {
  return { value: val, side: Sides.right }
}

/**
 * @name match
 * @description Match either pattern
 * @param {any} val
 * @param {L} left
 * @param {R} right
 * @returns {T}
 */
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

/**
 * @name fold
 * @description Match either pattern
 * @param {Either<L, R>} val
 * @param {L} left
 * @param {R} right
 * @returns {T}
 */
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
