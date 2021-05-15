import * as path from 'path'
import { Response } from 'express'

interface ErrorPageOptions {
  code: number
  message: string
}

export const renderErrorPage = (res: Response, options: ErrorPageOptions): void => {
  res.status(options.code).render('error', {
    code: options.code,
    message: options.message
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
