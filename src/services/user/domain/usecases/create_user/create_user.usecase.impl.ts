import { UserModel } from "../../../data/models/user.model";
import { UserFailure } from "../../../errors/user.failure";
import { UserRepository } from "../../repositories/user.repository";
import { CreateUserUsecase } from "./create_user.usecase";

export class CreateUserUsecaseImpl implements CreateUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(user: UserModel): Promise<number | UserFailure> {
    const id = await this.userRepository.create(user);
    return id;
  }
}
