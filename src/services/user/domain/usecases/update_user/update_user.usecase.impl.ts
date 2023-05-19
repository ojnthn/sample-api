import { UpdateUserUsecase } from "./update_user.usercase";
import { UserRepository } from "../../repositories/user.repository";
import { UserModel } from "../../../data/models/user.model";
import { UserFailure } from "../../../errors/user.failure";

export class UpdateUserUsecaseImpl implements UpdateUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    id: number,
    usuario: UserModel
  ): Promise<boolean | UserFailure> {
    return await this.userRepository.update(id, usuario);
  }
}
