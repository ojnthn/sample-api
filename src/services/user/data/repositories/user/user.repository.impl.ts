import { UserRepository } from "../../../domain/repositories/user/user.repository";
import { UserDatasource } from "../../datasources/user/user.datasource";
import { UserModel } from "../../models/user.model";
import { UserFailure } from "../../../errors/user.failure";
import { UserSelectModel } from "../../models/user_select.model";

export class UserRepositoryImpl implements UserRepository {
  constructor(private datasource: UserDatasource) {}

  create(user: UserModel): Promise<number | UserFailure> {
    return this.datasource.create(user).catch((error) => {
      return new UserFailure(error.message);
    });
  }

  read(select: UserSelectModel): Promise<UserModel | UserFailure> {
    return this.datasource.read(select).catch((error) => {
      return new UserFailure(error.message);
    });
  }

  delete(id: number): Promise<boolean | UserFailure> {
    return this.datasource.delete(id).catch((error) => {
      return new UserFailure(error.message);
    });
  }

  update(id: number, usuario: UserModel): Promise<boolean | UserFailure> {
    return this.datasource.update(id, usuario).catch((error) => {
      return new UserFailure(error.message);
    });
  }

  list(): Promise<UserModel[] | UserFailure> {
    return this.datasource.list().catch((error) => {
      return new UserFailure(error.message);
    });
  }
}
