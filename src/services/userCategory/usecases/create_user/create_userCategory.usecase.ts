import { UserCategoryModel } from "../../data/models/userCategory.model";
import { UserCategoryFailure } from "../../errors/userCategory.failure";

export abstract class CreateUserCategoryUsecase {
  abstract execute(
    category: UserCategoryModel
  ): Promise<number | UserCategoryFailure>;
}
