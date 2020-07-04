# fnctnl [![NPM Package](https://img.shields.io/npm/v/fnctnl)](https://www.npmjs.com/package/fnctnl)

> Functional programming utilities

## Either

A value with two possibilities. `Left` holds an error outcome while `Right` holds the success outcome. Useful to represent the outcome of a computation that might fail.

```typescript
export type Either<L, R> = Left<L> | Right<R>;
```
