import { UserRepository } from "../../repositories/user.repository";
import { ReadUserUsecase } from "./read_user.usecase";

export class ReadUserUsecaseImpl implements ReadUserUsecase {
    constructor(
        private userRepository: UserRepository
    ) {}

    async execute(id: string) {
        const user = await this.userRepository.read(id);
        return user;
    }
}