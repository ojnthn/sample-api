import { UserFailure } from "../../../errors/user.failure";
import { UserRepository } from "../../repositories/user/user.repository";
import { DeleteUserUsecase } from "./delete_user.usecase";

export class DeleteUserUsecaseImpl implements DeleteUserUsecase {
  constructor(private _repository: UserRepository) {}

  async execute(id: number): Promise<boolean | UserFailure> {
    try {
      return await this._repository.delete(id);
    } catch (error) {
      if (error instanceof UserFailure) {
        throw new UserFailure(error.message);
      }

      throw new UserFailure("Error deleting user");
    }
  }
}
