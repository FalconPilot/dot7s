import { Either, match } from 'fp-ts/Either'

export const extractOrThrow = <ET, T>(either: Either<ET, T>): T =>
  match<ET, T, T>(
    errors => { throw errors },
    data => data
  )(either)

