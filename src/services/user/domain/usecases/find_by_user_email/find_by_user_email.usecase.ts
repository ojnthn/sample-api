import { UserFailure } from "../../../errors/user.failure";

export abstract class FindByUserEmailUsecase {
  abstract execute(email: string): Promise<any | UserFailure>;
}
