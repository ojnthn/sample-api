import { UserCategoryModel } from "../../data/models/user_category.model";
import { UserCategoryRepository } from "../../domain/repositories/user_category.repository";
import { UserCategoryFailure } from "../../errors/user_category.failure";
import { ReadUserCategoryUsecase } from "./read_user_category.usecase";

export class ReadUserCategoryUsecaseImpl implements ReadUserCategoryUsecase {
  constructor(private userRepository: UserCategoryRepository) {}

  async execute(id: number): Promise<UserCategoryModel | UserCategoryFailure> {
    const user = await this.userRepository.read(id);
    return user;
  }
}
