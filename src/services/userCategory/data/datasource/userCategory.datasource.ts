import { UserCategoryModel } from "../models/userCategory.model";

export abstract class UserCategoryDatasource {
  abstract create(category: UserCategoryModel): Promise<number>;
  abstract read(id: number): Promise<UserCategoryModel>;
  abstract delete(id: number): Promise<boolean>;
  abstract update(id: number, category: UserCategoryModel): Promise<boolean>;
  abstract list(): Promise<UserCategoryModel[]>;
}
