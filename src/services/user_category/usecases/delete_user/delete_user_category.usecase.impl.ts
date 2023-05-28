import { UserCategoryRepository } from "../../domain/repositories/user_category.repository";
import { UserCategoryFailure } from "../../errors/user_category.failure";
import { DeleteUserCategoryUsecase } from "./delete_user_category.usecase";

export class DeleteUserCategoryUsecaseImpl
  implements DeleteUserCategoryUsecase
{
  constructor(private _repository: UserCategoryRepository) {}

  async execute(id: number): Promise<boolean | UserCategoryFailure> {
    try {
      return await this._repository.delete(id);
    } catch (error) {
      if (error instanceof UserCategoryFailure) {
        throw new UserCategoryFailure(error.message);
      }

      throw new UserCategoryFailure("Error deleting user");
    }
  }
}
