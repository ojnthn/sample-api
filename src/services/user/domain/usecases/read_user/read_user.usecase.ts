import { UserModel } from "../../../data/models/user.model";
import { UserSelectModel } from "../../../data/models/user_select.model";
import { UserFailure } from "../../../errors/user.failure";

export abstract class ReadUserUsecase {
  abstract execute(
    userSelect: UserSelectModel
  ): Promise<UserModel | UserFailure>;
}
