export interface APIErrorOptions {
  code: number
  message: string
}

export class APIError extends Error {
  options: APIErrorOptions

  constructor (options: APIErrorOptions) {
    super(options.message)
    this.options = options
  }
}
