import { UserModel } from "../../data/models/user.model";
import { UserFailure } from "../../errors/user.failure";

export abstract class UserRepository {
  abstract create(
    name: string,
    email: string,
    telefone: string
  ): Promise<number | UserFailure>;
  abstract read(id: string): Promise<UserModel | UserFailure>;
}
