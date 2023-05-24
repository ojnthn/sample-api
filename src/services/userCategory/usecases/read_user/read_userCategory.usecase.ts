import { UserCategoryModel } from "../../data/models/userCategory.model";
import { UserCategoryFailure } from "../../errors/userCategory.failure";

export abstract class ReadUserCategoryUsecase {
  abstract execute(
    id: number
  ): Promise<UserCategoryModel | UserCategoryFailure>;
}
