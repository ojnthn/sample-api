import { UserModel } from "../../../data/models/user.model";
import { UserFailure } from "../../../errors/user.failure";

export abstract class UpdateUserUsecase {
  abstract execute(
    id: number,
    usuario: UserModel
  ): Promise<boolean | UserFailure>;
}
