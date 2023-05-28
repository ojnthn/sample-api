import { UserCategoryModel } from "../../data/models/user_category.model";
import { UserCategoryFailure } from "../../errors/user_category.failure";

export abstract class UserCategoryRepository {
  abstract create(
    category: UserCategoryModel
  ): Promise<number | UserCategoryFailure>;
  abstract read(id: number): Promise<UserCategoryModel | UserCategoryFailure>;
  abstract delete(id: number): Promise<boolean | UserCategoryFailure>;
  abstract update(
    id: number,
    category: UserCategoryModel
  ): Promise<boolean | UserCategoryFailure>;
  abstract list(): Promise<UserCategoryModel[] | UserCategoryFailure>;
}
