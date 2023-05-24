import { UserCategoryFailure } from "../../errors/userCategory.failure";

export abstract class DeleteUserCategoryUsecase {
  abstract execute(id: number): Promise<boolean | UserCategoryFailure>;
}
