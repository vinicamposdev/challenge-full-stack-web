import { IAddStudentModel } from '@/domain/usecases/add-student'
import { IStudentModel } from '@/domain/models/student'

export interface IAddStudentRepository {
  add: (studentData: IAddStudentModel) => Promise<IStudentModel>
}
