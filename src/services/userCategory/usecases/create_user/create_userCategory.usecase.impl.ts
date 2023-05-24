import { UserCategoryModel } from "../../data/models/userCategory.model";
import { UserCategoryRepository } from "../../domain/repositories/userCategory.repository";
import { UserCategoryFailure } from "../../errors/userCategory.failure";

export class CreateUserCategoryUsecaseImpl
  implements CreateUserCategoryUsecaseImpl
{
  constructor(private userCategoryRepository: UserCategoryRepository) {}

  async execute(
    category: UserCategoryModel
  ): Promise<number | UserCategoryFailure> {
    const id = await this.userCategoryRepository.create(category);
    return id;
  }
}
