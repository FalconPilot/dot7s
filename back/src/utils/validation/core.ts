import * as Either from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

import { APIError } from '$back/types'

export const validateNumeric = (
  label: string
) => (
  value: string
): Either.Either<APIError, number> => pipe(
  parseInt(value, 10),
  Either.fromPredicate(
    n => !isNaN(n),
    () => new APIError({
      code: 400,
      message: `${label} should be a valid number`
    })
  )
)
