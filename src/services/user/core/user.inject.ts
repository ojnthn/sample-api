import knex from "knex";
import { UserController } from "../controllers/user.controller";
import { UserDatasource } from "../data/datasources/user.datasource";
import { UserDatasourceImpl } from "../data/datasources/user.datasource.impl";
import { UserRepositoryImpl } from "../data/repositories/user.repository.impl";
import { UserRepository } from "../domain/repositories/user.repository";
import { CreateUserUsecaseImpl } from "../domain/usecases/create_user/create_user.usecase.impl";
import { ReadUserUsecaseImpl } from "../domain/usecases/read_user/read_user.usecase.impl";

export class UserInject {
  private userController: UserController;

  constructor(
    private database: any
  ) {
    const userDatasource: UserDatasource = new UserDatasourceImpl(database);

    const userRepository: UserRepository = new UserRepositoryImpl(
      userDatasource
    );

    this.userController = new UserController(
      new CreateUserUsecaseImpl(userRepository),
      new ReadUserUsecaseImpl(userRepository)
    );
  }

  getUserController(): UserController {
    return this.userController;
  }
}
