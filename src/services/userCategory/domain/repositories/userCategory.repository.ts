import { UserCategoryModel } from "../../data/models/userCategory.model";
import { UserCategoryFailure } from "../../errors/userCategory.failure";

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
