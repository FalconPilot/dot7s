import * as fs from 'fs'
import * as path from 'path'

import { RouterFunction } from '$back/types'
import { viewPath } from '$back/utils'

const distPath = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  'front',
  'dist'
)

export const rootRouter: RouterFunction = (app, env) => {
  app.get('/', (req, res) => {
    return res.render('mainframe', {
      lang: 'fr',
      title: 'Dot7S',
      view: viewPath('app')
    })
  })

  app.get('/admin', (req, res) => {
    return res.render('mainframe', {
      lang: 'fr',
      title: 'Dot7S - Admin',
      view: viewPath('admin')
    })
  })

  app.get('/app.js', (req, res) => {
    const js = fs.readFileSync(path.resolve(distPath, 'app.js'), 'utf-8')
    return res.send(js)
  })

  app.get('/admin.js', (req, res) => {
    const js = fs.readFileSync(path.resolve(distPath, 'admin.js'), 'utf-8')
    return res.send(js)
  })
}
