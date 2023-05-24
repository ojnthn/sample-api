import { UserCategoryModel } from "../../data/models/userCategory.model";
import { UserCategoryFailure } from "../../errors/userCategory.failure";

export abstract class UpdateUserCategoryUsecase {
  abstract execute(
    id: number,
    category: UserCategoryModel
  ): Promise<boolean | UserCategoryFailure>;
}
