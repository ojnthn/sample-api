import { UserFailure } from "../../../errors/user.failure";

export abstract class FindByEmailUserUsecase {
  abstract execute(email: string): Promise<string | UserFailure>;
}
