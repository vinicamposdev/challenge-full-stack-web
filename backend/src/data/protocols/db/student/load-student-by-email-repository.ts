import { IStudentModel } from '@/domain/models/student'

export interface ILoadStudentByEmailRepository {
  loadByEmail: (email: string) => Promise<IStudentModel>
}
