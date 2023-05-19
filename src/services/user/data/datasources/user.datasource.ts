import { UserModel } from "../models/user.model";

export abstract class UserDatasource {
  abstract create(usuario: UserModel): Promise<number>;
  abstract read(id: number): Promise<UserModel>;
  abstract delete(id: number): Promise<boolean>;
  abstract update(id: number, usuario: UserModel): Promise<boolean>;
  abstract list(): Promise<UserModel[]>;
}
