import { UserController } from "../controllers/user.controller";
import { UserDatasource } from "../data/datasources/user/user.datasource";
import { UserDatasourceImpl } from "../data/datasources/user/user.datasource.impl";
import { UserRepositoryImpl } from "../data/repositories/user/user.repository.impl";
import { UserRepository } from "../domain/repositories/user/user.repository";
import { CreateUserUsecaseImpl } from "../domain/usecases/create_user/create_user.usecase.impl";
import { ReadUserUsecaseImpl } from "../domain/usecases/read_user/read_user.usecase.impl";
import { DeleteUserUsecaseImpl } from "../domain/usecases/delete_user/delete_user.usecase.impl";
import { UpdateUserUsecaseImpl } from "../domain/usecases/update_user/update_user.usecase.impl";
import { ListUserUsecaseImpl } from "../domain/usecases/list_user/list_user.usercase.impl";
import { FindByUserEmailUsecaseImpl } from "../domain/usecases/find_by_user_email/find_by_user_email.usecase.impl";
import { FindByUserEmailDatasource } from "../data/datasources/find_by_user_email/find_by_user_email.datasource";
import { FindByUserEmailDatasourceImpl } from "../data/datasources/find_by_user_email/find_by_user_email.datasource.impl";
import { FindByUserEmailRepository } from "../domain/repositories/find_by_user_email/find_by_user_email.repository";
import { FindByUserEmailRepositoryImpl } from "../data/repositories/find_by_user_email/find_by_user_email.repository.impl";
import { ValidateUserUsecase } from "../domain/usecases/validate_user/validate_user.usecase";
import { ValidateUserUsecaseImpl } from "../domain/usecases/validate_user/validate_user.usecase.impl";

export class UserInject {
  private userController: UserController;

  constructor(private database: any) {
    const userDatasource: UserDatasource = new UserDatasourceImpl(database);

    const userRepository: UserRepository = new UserRepositoryImpl(
      userDatasource
    );

    const findByUserEmailDatasource: FindByUserEmailDatasource =
      new FindByUserEmailDatasourceImpl(database);
    const findByUserEmailRepository: FindByUserEmailRepository =
      new FindByUserEmailRepositoryImpl(findByUserEmailDatasource);

    const findUserEmailUsecase: FindByUserEmailUsecaseImpl =
      new FindByUserEmailUsecaseImpl(findByUserEmailRepository);

    this.userController = new UserController(
      new CreateUserUsecaseImpl(userRepository),
      new ReadUserUsecaseImpl(userRepository),
      new DeleteUserUsecaseImpl(userRepository),
      new UpdateUserUsecaseImpl(userRepository),
      new ListUserUsecaseImpl(userRepository),
      findUserEmailUsecase,
      new ValidateUserUsecaseImpl(findUserEmailUsecase)
    );
  }

  getUserController(): UserController {
    return this.userController;
  }
}
