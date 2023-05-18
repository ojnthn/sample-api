import { UserModel } from "../models/user.model";

export abstract class UserDatasource {
  abstract create(
    name: string,
    email: string,
    telefone: string
  ): Promise<number>;
  abstract read(id: number): Promise<UserModel>;
  abstract delete(id: number): Promise<boolean>;
}
