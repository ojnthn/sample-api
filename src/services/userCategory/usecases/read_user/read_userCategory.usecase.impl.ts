import { UserCategoryModel } from "../../data/models/userCategory.model";
import { UserCategoryRepository } from "../../domain/repositories/userCategory.repository";
import { UserCategoryFailure } from "../../errors/userCategory.failure";
import { ReadUserCategoryUsecase } from "./read_userCategory.usecase";

export class ReadUserCategoryUsecaseImpl implements ReadUserCategoryUsecase {
  constructor(private userRepository: UserCategoryRepository) {}

  async execute(id: number): Promise<UserCategoryModel | UserCategoryFailure> {
    const user = await this.userRepository.read(id);
    return user;
  }
}
