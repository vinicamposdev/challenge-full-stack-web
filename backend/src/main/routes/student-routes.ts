/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express/express-route-adapter'
import { makeStudentController } from '@/main/factories/student-factory'

export default (router: Router): void => {
  router.post('/student', adaptRoute(makeStudentController()))
}
