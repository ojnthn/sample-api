import { UserCategoryModel } from "../../data/models/user_category.model";
import { UserCategoryRepository } from "../../domain/repositories/user_category.repository";
import { UserCategoryFailure } from "../../errors/user_category.failure";
import { UpdateUserCategoryUsecase } from "./update_user_category.usercase";

export class UpdateUserCategoryUsecaseImpl
  implements UpdateUserCategoryUsecase
{
  constructor(private userRepository: UserCategoryRepository) {}

  async execute(
    id: number,
    category: UserCategoryModel
  ): Promise<boolean | UserCategoryFailure> {
    return await this.userRepository.update(id, category);
  }
}
