import { UserModel } from "../../../data/models/user.model";
import { FindByUserEmailUsecase } from "../find_by_user_email/find_by_user_email.usecase";
import { ValidateUserUsecase } from "./validate_user.usecase";

export class ValidateUserUsecaseImpl implements ValidateUserUsecase {
  constructor(private findByEmail: FindByUserEmailUsecase) {}

  async execute(user: UserModel): Promise<boolean> {
    /**
     * Atualmente este método está apenas verificando se o e-mail já existe no banco de dados
     * mas futuramente ele pode implementar outra regra de négocio relacionado a validação.
     */
    return await this.findByEmail.execute(user.email);
  }
}
