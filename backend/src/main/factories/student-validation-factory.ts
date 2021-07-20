import { RequiredFieldValidation, ValidationComposite, CompareFieldValidation } from '@/validation/validators'
import { IValidation } from '@/presentation/protocols/validation'

export const makeStudentValidation = (): ValidationComposite => {
  const validations: IValidation[] = []

  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldValidation('password', 'passwordConfirmation'))

  return new ValidationComposite(validations)
}
