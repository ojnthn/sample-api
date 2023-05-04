import { UserModel } from "../../data/models/user.model";
import { UserFailure } from "../../errors/user.failure";

export abstract class UserRepository {
  abstract create(name: string, email: string): Promise<number | UserFailure>;
  abstract read(id: string): Promise<UserModel>;
}
