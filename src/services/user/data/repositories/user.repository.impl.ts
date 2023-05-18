import { UserRepository } from "../../domain/repositories/user.repository";
import { UserException } from "../../errors/user.exception";
import { UserDatasource } from "../datasources/user.datasource";
import { UserModel } from "../models/user.model";
import { UserFailure } from "../../errors/user.failure";

export class UserRepositoryImpl implements UserRepository {
  constructor(private datasource: UserDatasource) {}

  create(
    name: string,
    email: string,
    telefone: string
  ): Promise<number | UserFailure> {
    return this.datasource.create(name, email, telefone).catch((error) => {
      return new UserFailure(error.message);
    });
  }

  read(id: number): Promise<UserModel | UserFailure> {
    return this.datasource.read(id).catch((error) => {
      return new UserFailure(error.message);
    });
  }

  delete(id: number): Promise<boolean | UserFailure> {
    return this.datasource.delete(id).catch((error) => {
      return new UserFailure(error.message);
    });
  }
}
