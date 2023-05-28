import { UserFailure } from "../../../errors/user.failure";

export abstract class FindByUserEmailRepository {
  abstract FindByUserEmail(email: string): Promise<any | UserFailure>;
}
