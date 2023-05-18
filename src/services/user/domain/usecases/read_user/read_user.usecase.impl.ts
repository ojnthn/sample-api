import { UserModel } from "../../../data/models/user.model";
import { UserFailure } from "../../../errors/user.failure";
import { UserRepository } from "../../repositories/user.repository";
import { ReadUserUsecase } from "./read_user.usecase";

export class ReadUserUsecaseImpl implements ReadUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string): Promise<UserModel | UserFailure> {
    const user = await this.userRepository.read(id);
    return user;
  }
}
