import { UserModel } from "../../../data/models/user.model";
import { UserFailure } from "../../../errors/user.failure";

export abstract class ReadUserUsecase {
  abstract execute(id: number): Promise<UserModel | UserFailure>;
}
