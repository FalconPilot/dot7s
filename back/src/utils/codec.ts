import * as t from 'io-ts'
import * as Either from 'fp-ts/Either'

import { APIError } from '$back/types'
import { pipe } from 'fp-ts/function'

export const decode = (label: string) => <BodyType>(
  codec: t.Decoder<unknown, BodyType>,
  expectedStatus: number = 500
) => (
  input: unknown
): Either.Either<APIError, BodyType> =>
  pipe(
    codec.decode(input),
    Either.mapLeft(err => new APIError({
      code: expectedStatus,
      message: `An error occured while decoding ${label}`,
      codecErrors: err
    }))
  )
