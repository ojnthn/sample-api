import { UserCategoryModel } from "../../data/models/user_category.model";
import { UserCategoryFailure } from "../../errors/user_category.failure";

export abstract class UpdateUserCategoryUsecase {
  abstract execute(
    id: number,
    category: UserCategoryModel
  ): Promise<boolean | UserCategoryFailure>;
}
