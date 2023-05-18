import { UserRepositoryImpl } from "../../../data/repositories/user.repository.impl";
import { UserFailure } from "../../../errors/user.failure";
import { UserRepository } from "../../repositories/user.repository";
import { CreateUserUsecase } from "./create_user.usecase";

export class CreateUserUsecaseImpl implements CreateUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(name: string, email: string, telefone: string): Promise<number | UserFailure> {
    const id = await this.userRepository.create(name, email, telefone);
    return id;
  }
}
