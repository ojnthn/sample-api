import { UserCategoryRepository } from "../../domain/repositories/user_category.repository";

import { UserCategoryModel } from "../models/user_category.model";
import { UserCategoryFailure } from "../../errors/user_category.failure";
import { UserCategoryDatasource } from "../datasource/user_category.datasource";

export class UserCategoryRepositoryImpl implements UserCategoryRepository {
  constructor(private datasource: UserCategoryDatasource) {}

  create(category: UserCategoryModel): Promise<number | UserCategoryFailure> {
    return this.datasource.create(category).catch((error) => {
      return new UserCategoryFailure(error.message);
    });
  }

  read(id: number): Promise<UserCategoryModel | UserCategoryFailure> {
    return this.datasource.read(id).catch((error) => {
      return new UserCategoryFailure(error.message);
    });
  }

  delete(id: number): Promise<boolean | UserCategoryFailure> {
    return this.datasource.delete(id).catch((error) => {
      return new UserCategoryFailure(error.message);
    });
  }

  update(
    id: number,
    category: UserCategoryModel
  ): Promise<boolean | UserCategoryFailure> {
    return this.datasource.update(id, category).catch((error) => {
      return new UserCategoryFailure(error.message);
    });
  }

  list(): Promise<UserCategoryModel[] | UserCategoryFailure> {
    return this.datasource.list().catch((error) => {
      return new UserCategoryFailure(error.message);
    });
  }
}
