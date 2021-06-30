import * as Either from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

import { APIError } from '$back/types'

export const validateNumeric = (tag: string) => (x: string): Either.Either<APIError, number> => pipe(
  parseInt(x, 10),
  Either.fromPredicate(
    n => !isNaN(n),
    () => new APIError({
      code: 500,
      message: `${tag} should be a valid number`
    })
  )
)
