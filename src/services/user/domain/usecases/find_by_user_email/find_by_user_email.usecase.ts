import { UserModel } from "../../../data/models/user.model";
import { UserFailure } from "../../../errors/user.failure";

export abstract class FindByUserEmailUsecase {
  abstract execute(email: string): Promise<UserModel | UserFailure>;
}
