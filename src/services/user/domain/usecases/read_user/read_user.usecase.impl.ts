import { UserModel } from "../../../data/models/user.model";
import { UserSelectModel } from "../../../data/models/user_select.model";
import { UserFailure } from "../../../errors/user.failure";
import { UserRepository } from "../../repositories/user/user.repository";
import { ReadUserUsecase } from "./read_user.usecase";

export class ReadUserUsecaseImpl implements ReadUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(userSelect: UserSelectModel): Promise<UserModel | UserFailure> {
    const user = await this.userRepository.read(userSelect);
    return user;
  }
}
