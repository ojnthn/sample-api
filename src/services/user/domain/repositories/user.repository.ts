import { UserModel } from "../../data/models/user.model";
import { UserFailure } from "../../errors/user.failure";

export abstract class UserRepository {
  abstract create(user: UserModel): Promise<number | UserFailure>;
  abstract read(id: number): Promise<UserModel | UserFailure>;
  abstract delete(id: number): Promise<boolean | UserFailure>;
}
