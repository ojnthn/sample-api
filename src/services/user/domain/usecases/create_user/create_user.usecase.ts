import { UserFailure } from "../../../errors/user.failure";

export abstract class CreateUserUsecase {
  abstract execute(name: string, email: string): Promise<number | UserFailure>;
}
