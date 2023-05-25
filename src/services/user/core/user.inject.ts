import { UserController } from "../controllers/user.controller";
import { UserDatasource } from "../data/datasources/user.datasource";
import { UserDatasourceImpl } from "../data/datasources/user.datasource.impl";
import { UserRepositoryImpl } from "../data/repositories/user.repository.impl";
import { UserRepository } from "../domain/repositories/user.repository";
import { CreateUserUsecaseImpl } from "../domain/usecases/create_user/create_user.usecase.impl";
import { ReadUserUsecaseImpl } from "../domain/usecases/read_user/read_user.usecase.impl";
import { DeleteUserUsecaseImpl } from "../domain/usecases/delete_user/delete_user.usecase.impl";
import { UpdateUserUsecaseImpl } from "../domain/usecases/update_user/update_user.usecase.impl";
import { ListUserUsecaseImpl } from "../domain/usecases/list_user/list_user.usercase.impl";
import { FindByEmailUserUsecaseImpl } from "../domain/usecases/findByEmail_user/findByEmail_user.usecase.impl";
import { FindByEmailDatasource } from "../data/datasources/findByEmail_user/findByEmail.datasource";
import { FindByEmailDatasourceImpl } from "../data/datasources/findByEmail_user/findByEmail.datasource.impl";
import { FindByEmailRepository } from "../domain/repositories/findByEmail/findByEmail.repository";
import { FindByEmailRepositoryImpl } from "../data/repositories/findByEmail/findByEmail.repository.impl";

export class UserInject {
  private userController: UserController;

  constructor(private database: any) {
    const userDatasource: UserDatasource = new UserDatasourceImpl(database);

    const userRepository: UserRepository = new UserRepositoryImpl(
      userDatasource
    );

    const findByEmailDatasource: FindByEmailDatasource =
      new FindByEmailDatasourceImpl(database);
    const findByEmailRepository: FindByEmailRepository =
      new FindByEmailRepositoryImpl(findByEmailDatasource);

    this.userController = new UserController(
      new CreateUserUsecaseImpl(userRepository),
      new ReadUserUsecaseImpl(userRepository),
      new DeleteUserUsecaseImpl(userRepository),
      new UpdateUserUsecaseImpl(userRepository),
      new ListUserUsecaseImpl(userRepository),
      new FindByEmailUserUsecaseImpl(findByEmailRepository)
    );
  }

  getUserController(): UserController {
    return this.userController;
  }
}
