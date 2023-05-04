import { UserRepository } from "../../domain/repositories/user.repository";
import { UserException } from "../../errors/user.exception";
import { UserDatasource } from "../datasources/user.datasource";
import { UserModel } from "../models/user.model";
import { UserFailure } from "../../errors/user.failure";

export class UserRepositoryImpl implements UserRepository {
  constructor(private datasource: UserDatasource) {}

  create(name: string, email: string): Promise<number | UserFailure> {
    return this.datasource.create(name, email).catch((error) => {
      return new UserFailure(error.message);
    });
  }

  read(id: string): Promise<UserModel> {
    return this.datasource.read(id);
  }
}
