import * as t from 'io-ts'

export interface APIErrorOptions {
  code: number
  message: string
  codecErrors?: t.Errors
}

export class APIError extends Error {
  options: APIErrorOptions

  constructor (options: APIErrorOptions) {
    super(options.message)
    this.options = options
  }
}
