import { UserModel } from "../../../data/models/user.model";

export abstract class ValidateUserUsecase {
  abstract execute(user: UserModel): Promise<boolean>;
}
