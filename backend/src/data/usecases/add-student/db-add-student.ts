import {
  IAddStudent, IAddStudentModel, IStudentModel, IAddStudentRepository
} from './db-add-student-protocols'

export class DbAddStudent implements IAddStudent {
  constructor (
    private readonly addStudentRepository: IAddStudentRepository
  ) {}

  async add (studentData: IAddStudentModel): Promise<IStudentModel> {
    const student = await this.addStudentRepository.add(studentData)
    return student
  }
}
