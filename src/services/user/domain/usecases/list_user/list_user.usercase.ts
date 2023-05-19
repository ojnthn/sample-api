import { UserModel } from "../../../data/models/user.model";
import { UserFailure } from "../../../errors/user.failure";

export abstract class ListUserUsecase {
  abstract execute(): Promise<UserModel[] | UserFailure>;
}
