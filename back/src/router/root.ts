import * as fs from 'fs'
import * as path from 'path'

import { RouterFunction } from '$back/types'
import { viewPath } from '$back/utils'

export const rootRouter: RouterFunction = (app, env) => {
  app.get('/', (req, res) => {
    return res.render('mainframe', {
      lang: 'en',
      title: 'FooBar',
      view: viewPath('app')
    })
  })

  app.get('/app.js', (req, res) => {
    const js = fs.readFileSync(path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'front',
      'dist',
      'index.js'
    ), 'utf-8')

    return res.send(js)
  })
}
