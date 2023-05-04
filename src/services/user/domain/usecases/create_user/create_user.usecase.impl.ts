import { UserRepositoryImpl } from "../../../data/repositories/user.repository.impl";
import { UserRepository } from "../../repositories/user.repository";
import { CreateUserUsecase } from "./create_user.usecase";

export class CreateUserUsecaseImpl implements CreateUserUsecase {
    constructor(
        private userRepository: UserRepository
    ) {}

    async execute(name: string, email: string): Promise<number> {
        const id = await this.userRepository.create(name, email);
        return id;
    }
}