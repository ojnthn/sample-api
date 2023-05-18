import { UserModel } from "../models/user.model";

export abstract class UserDatasource {
  abstract create(user: UserModel): Promise<number>;
  abstract read(id: number): Promise<UserModel>;
  abstract delete(id: number): Promise<boolean>;
}
