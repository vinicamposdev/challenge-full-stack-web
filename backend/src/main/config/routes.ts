import { Router } from 'express'
import { readdirSync } from 'fs'
import { join } from 'path'

export default (app: Router): void => {
  const router = Router()
  app.use('/api', router)

  readdirSync(join(__dirname, '..', 'routes')).map(async file => {
    if (!file.includes('.test.') && !file.endsWith('.map') && !file.includes('.spec.')) {
      (await import(join('..', 'routes', file))).default(router)
    }
  })
}
