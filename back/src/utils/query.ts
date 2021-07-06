import * as Option from 'fp-ts/Option'
import * as TaskEither from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/lib/function'

import { APIError } from '$back/types'

// Send a query to the database
const query = (label: string) => <T, Input = void>(
  q: (input: Input) => Promise<T>
) => (
  input: Input
): TaskEither.TaskEither<APIError, T> =>
  pipe(
    TaskEither.tryCatch(
      () => q(input),
      err => {
        console.error(err)
        return new APIError({
          code: 500,
          message: `[DB] An internal error occured while querying ${label} :(`
        })
      }
    )
  )

// Send a query to the database and 404 if it does not return anything
const queryStrict = (label: string) => <T, Input = void>(
  q: (input: Input) => Promise<T | null>
) => (
  input: Input
): TaskEither.TaskEither<APIError, T> =>
  pipe(
    query(label)(q)(input),
    TaskEither.chain(result => pipe(
      Option.fromNullable(result),
      TaskEither.fromOption(() => new APIError({
        code: 404,
        message: `No result was found for ${label}`
      }))
    ))
  )

export const database = {
  query,
  queryStrict
}
