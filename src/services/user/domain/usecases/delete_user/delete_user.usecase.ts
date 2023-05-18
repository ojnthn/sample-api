import { UserFailure } from "../../../errors/user.failure";

export abstract class DeleteUserUsecase {
  abstract execute(id: number): Promise<boolean | UserFailure>;
}