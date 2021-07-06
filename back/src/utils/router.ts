import * as path from 'path'
import * as Either from 'fp-ts/Either'
import * as TaskEither from 'fp-ts/lib/TaskEither'
import { NextFunction, Request, RequestHandler, Response } from 'express'

import { APIError, APIErrorOptions } from '$back/types/errors'

export const asyncRoute = (fn: (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<ReturnType<RequestHandler>>): RequestHandler => (req, res, next) => {
  fn(req, res, next).catch(next)
}

export const renderErrorPage = (res: Response, options: APIErrorOptions): void => {
  res.status(options.code).render('error', options)
}

export const renderErrorJson = (res: Response, options: APIErrorOptions): void => {
  res.status(options.code).json(options)
}

export const renderJson = <T>(
  res: Response
) => (
  pipeResult: Either.Either<APIError, T>
): void => {
  if (Either.isLeft(pipeResult)) {
    renderErrorJson(res, pipeResult.left.options)
    return
  }
  res.json(pipeResult.right)
}

export const asyncRenderJson = <T>(
  res: Response
) => async (
  pipeResult: TaskEither.TaskEither<APIError, T>
): Promise<void> =>
  pipeResult().then(renderJson(res))

export const viewPath = (slug: string): string => path.resolve(
  __dirname,
  '..',
  '..',
  'static',
  'views',
  `${slug}.ejs`
)
