import { UserModel } from "../../../data/models/user.model";
import { UserFailure } from "../../../errors/user.failure";

export abstract class CreateUserUsecase {
  abstract execute(
    user: UserModel
  ): Promise<number | UserFailure>;
}
