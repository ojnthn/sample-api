import { UserFailure } from "../../../errors/user.failure";
import { FindByEmailRepository } from "../../repositories/findByEmail/findByEmail.repository";
import { FindByEmailUserUsecase } from "./findByEmail_user.usecase";

export class FindByEmailUserUsecaseImpl implements FindByEmailUserUsecase {
  constructor(private findByEmailRepository: FindByEmailRepository) {}

  async execute(email: string): Promise<string | UserFailure> {
    const contactExists = await this.findByEmailRepository.FindByEmail(email);
    return contactExists;
  }
}
