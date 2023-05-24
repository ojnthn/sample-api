import { UserCategoryRepository } from "../../domain/repositories/userCategory.repository";
import { UserCategoryFailure } from "../../errors/userCategory.failure";
import { DeleteUserCategoryUsecase } from "./delete_userCategory.usecase";

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
