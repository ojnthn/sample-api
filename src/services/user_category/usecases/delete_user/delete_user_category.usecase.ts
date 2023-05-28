import { UserCategoryFailure } from "../../errors/user_category.failure";

export abstract class DeleteUserCategoryUsecase {
  abstract execute(id: number): Promise<boolean | UserCategoryFailure>;
}
