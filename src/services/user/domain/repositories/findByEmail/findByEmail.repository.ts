import { UserFailure } from "../../../errors/user.failure";

export abstract class FindByEmailRepository {
  abstract FindByEmail(email: string): Promise<string | UserFailure>;
}
