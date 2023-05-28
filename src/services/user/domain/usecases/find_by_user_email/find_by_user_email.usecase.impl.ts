import { UserFailure } from "../../../errors/user.failure";
import { FindByUserEmailRepository } from "../../repositories/find_by_user_email/find_by_user_email.repository";
import { FindByUserEmailUsecase } from "./find_by_user_email.usecase";

export class FindByUserEmailUsecaseImpl implements FindByUserEmailUsecase {
  constructor(private findByEmailRepository: FindByUserEmailRepository) {}

  async execute(email: string): Promise<string | UserFailure> {
    const contactExists = await this.findByEmailRepository.FindByUserEmail(
      email
    );
    return contactExists;
  }
}
