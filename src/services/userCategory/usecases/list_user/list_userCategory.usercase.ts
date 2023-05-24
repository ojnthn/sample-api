import { UserCategoryModel } from "../../data/models/userCategory.model";
import { UserCategoryFailure } from "../../errors/userCategory.failure";

export abstract class ListUserCategoryUsecase {
  abstract execute(): Promise<UserCategoryModel[] | UserCategoryFailure>;
}
