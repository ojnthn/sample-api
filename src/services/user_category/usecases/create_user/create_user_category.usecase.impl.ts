import { UserCategoryModel } from "../../data/models/user_category.model";
import { UserCategoryRepository } from "../../domain/repositories/user_category.repository";
import { UserCategoryFailure } from "../../errors/user_category.failure";
import { CreateUserCategoryUsecase } from "./create_user_category.usecase";

export class CreateUserCategoryUsecaseImpl
  implements CreateUserCategoryUsecase
{
  constructor(private userCategoryRepository: UserCategoryRepository) {}

  async execute(
    category: UserCategoryModel
  ): Promise<number | UserCategoryFailure> {
    const id = await this.userCategoryRepository.create(category);
    return id;
  }
}
