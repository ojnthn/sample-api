import { UserCategoryRepository } from "../../domain/repositories/userCategory.repository";

import { UserCategoryModel } from "../models/userCategory.model";
import { UserCategoryFailure } from "../../errors/userCategory.failure";
import { UserCategoryDatasource } from "../datasource/userCategory.datasource";

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
