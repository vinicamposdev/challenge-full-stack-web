import { getRepository, Repository } from 'typeorm'
import { IAddStudentModel } from '@/domain/usecases/add-student'
import { IStudentModel } from '@/domain/models/student'
import { IAddStudentRepository } from '@/data/protocols/db/student/add-student-repository'
import { Student } from '@/infra/db/typeorm/entities/student-entitie'

export class StudentRepository implements IAddStudentRepository {
  private readonly ormRepository: Repository<Student>

  constructor () {
    this.ormRepository = getRepository(Student)
  }

  async add (studentData: IAddStudentModel): Promise<IStudentModel> {
    const user = this.ormRepository.create(studentData)
    await this.ormRepository.save(user)
    return user
  }
}
