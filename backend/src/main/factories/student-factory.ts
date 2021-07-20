import { DbAddStudent } from '@/data/usecases/add-student/db-add-student'
import { StudentRepository } from '@/infra/db/typeorm/student/student-repository'
import { StudentController } from '@/presentation/controllers/student/student-controller'
import { IController } from '@/presentation/protocols'
import { makeStudentValidation } from './student-validation-factory'

export const makeStudentController = (): IController => {
  const studentRepository = new StudentRepository()
  const dbAddStudent = new DbAddStudent(studentRepository)
  const signUpController = new StudentController(dbAddStudent, makeStudentValidation())

  return signUpController
}
