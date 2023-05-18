import { UserFailure } from "../../../errors/user.failure";

export abstract class CreateUserUsecase {
  abstract execute(
    name: string,
    email: string,
    telefone: string
  ): Promise<number | UserFailure>;
}
