import { UserModel } from "../../models/user.model";
import { UserSelectModel } from "../../models/user_select.model";

export abstract class UserDatasource {
  abstract create(user: UserModel): Promise<number>;
  abstract read(select: UserSelectModel): Promise<UserModel>;
  abstract delete(id: number): Promise<boolean>;
  abstract update(id: number, user: UserModel): Promise<boolean>;
  abstract list(): Promise<UserModel[]>;
}
