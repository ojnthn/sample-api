import { UserCategoryModel } from "../../data/models/user_category.model";
import { UserCategoryFailure } from "../../errors/user_category.failure";

export abstract class ReadUserCategoryUsecase {
  abstract execute(
    id: number
  ): Promise<UserCategoryModel | UserCategoryFailure>;
}
