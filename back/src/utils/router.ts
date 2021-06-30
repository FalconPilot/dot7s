import * as path from 'path'
import { NextFunction, Request, RequestHandler, Response } from 'express'

import { APIErrorOptions } from '$back/types/errors'

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
  console.log(options)
  res.status(options.code).json({
    status: options.code,
    reason: options.message
  })
}

export const viewPath = (slug: string): string => path.resolve(
  __dirname,
  '..',
  '..',
  'static',
  'views',
  `${slug}.ejs`
)
