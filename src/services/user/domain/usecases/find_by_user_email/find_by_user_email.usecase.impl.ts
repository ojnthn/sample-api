import { UserModel } from "../../../data/models/user.model";
import { UserSelectModel } from "../../../data/models/user_select.model";
import { UserFailure } from "../../../errors/user.failure";
import { UserRepository } from "../../repositories/user/user.repository";
import { FindByUserEmailUsecase } from "./find_by_user_email.usecase";

export class FindByUserEmailUsecaseImpl implements FindByUserEmailUsecase {
  constructor(private user: UserRepository) {}

  async execute(email: string): Promise<UserModel | UserFailure> {
    return await this.user.read(new UserSelectModel(null, email));
  }
}
