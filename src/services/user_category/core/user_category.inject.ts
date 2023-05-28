import { UserCategoryController } from "../controllers/user_category.controller";
import { UserCategoryDatasource } from "../data/datasource/user_category.datasource";
import { UserCategoryDatasourceImpl } from "../data/datasource/user_category.datasource.impl";
import { UserCategoryRepositoryImpl } from "../data/repositories/user_category.repository.impl";
import { UserCategoryRepository } from "../domain/repositories/user_category.repository";
import { CreateUserCategoryUsecaseImpl } from "../usecases/create_user/create_user_category.usecase.impl";
import { DeleteUserCategoryUsecaseImpl } from "../usecases/delete_user/delete_user_category.usecase.impl";
import { ListUserCategoryUsecaseImpl } from "../usecases/list_user/list_user_category.usercase.impl";
import { ReadUserCategoryUsecaseImpl } from "../usecases/read_user/read_user_category.usecase.impl";
import { UpdateUserCategoryUsecaseImpl } from "../usecases/update_user/update_user_category.usecase.impl";

export class UserCategoryInject {
  private userCategoryController: UserCategoryController;

  constructor(private database: any) {
    const userCategoryDatasource: UserCategoryDatasource =
      new UserCategoryDatasourceImpl(database);

    const userCategoryRepository: UserCategoryRepository =
      new UserCategoryRepositoryImpl(userCategoryDatasource);

    this.userCategoryController = new UserCategoryController(
      new CreateUserCategoryUsecaseImpl(userCategoryRepository),
      new ReadUserCategoryUsecaseImpl(userCategoryRepository),
      new DeleteUserCategoryUsecaseImpl(userCategoryRepository),
      new UpdateUserCategoryUsecaseImpl(userCategoryRepository),
      new ListUserCategoryUsecaseImpl(userCategoryRepository)
    );
  }

  getUserCategoryController(): UserCategoryController {
    return this.userCategoryController;
  }
}
