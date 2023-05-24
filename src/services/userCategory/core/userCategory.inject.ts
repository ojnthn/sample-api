import { UserCategoryController } from "../controllers/userCategory.controller";
import { UserCategoryDatasource } from "../data/datasource/userCategory.datasource";
import { UserCategoryDatasourceImpl } from "../data/datasource/userCategory.datasource.impl";
import { UserCategoryRepositoryImpl } from "../data/repositories/userCategory.repository.impl";
import { UserCategoryRepository } from "../domain/repositories/userCategory.repository";
import { CreateUserCategoryUsecaseImpl } from "../usecases/create_user/create_userCategory.usecase.impl";
import { DeleteUserCategoryUsecaseImpl } from "../usecases/delete_user/delete_userCategory.usecase.impl";
import { ListUserCategoryUsecaseImpl } from "../usecases/list_user/list_userCategory.usercase.impl";
import { ReadUserCategoryUsecaseImpl } from "../usecases/read_user/read_userCategory.usecase.impl";
import { UpdateUserCategoryUsecaseImpl } from "../usecases/update_user/update_userCategory.usecase.impl";

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
