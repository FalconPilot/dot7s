import * as t from 'io-ts'
import * as Either from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'

import { APIError } from '$back/types'

import { validateNumeric } from './core'

export const validateId = (label: string) => (
  value: string
): Either.Either<APIError, number> => pipe(
  validateNumeric(label)(value),
  Either.chain(Either.fromPredicate(
    id => id >= 1,
    () => new APIError({
      code: 400,
      message: `${label} should be a valid ID (positive number)`
    })
  ))
)

export const validatePayload = <BodyType>(
  label: string,
  codec: t.Decoder<unknown, BodyType>
) => (
  value: unknown,
): Either.Either<APIError, BodyType> => pipe(
  codec.decode(value),
  Either.mapLeft(errors => new APIError({
    code: 500,
    message: `There was an error while decoding a payload for ${label}`,
    codecErrors: errors
  }))
)
