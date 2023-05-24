import { UserCategoryModel } from "../../data/models/userCategory.model";
import { UserCategoryRepository } from "../../domain/repositories/userCategory.repository";
import { UserCategoryFailure } from "../../errors/userCategory.failure";
import { UpdateUserCategoryUsecase } from "./update_userCategory.usercase";

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
