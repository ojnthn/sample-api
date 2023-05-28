import { UserCategoryModel } from "../../data/models/user_category.model";
import { UserCategoryFailure } from "../../errors/user_category.failure";

export abstract class CreateUserCategoryUsecase {
  abstract execute(
    category: UserCategoryModel
  ): Promise<number | UserCategoryFailure>;
}
