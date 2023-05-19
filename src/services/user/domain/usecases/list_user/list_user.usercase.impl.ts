import { UserModel } from "../../../data/models/user.model";
import { UserFailure } from "../../../errors/user.failure";
import { UserRepository } from "../../repositories/user.repository";
import { ListUserUsecase } from "./list_user.usercase";

export class ListUserUsecaseImpl implements ListUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<UserModel[] | UserFailure> {
    const user = await this.userRepository.list();
    return user;
  }
}
