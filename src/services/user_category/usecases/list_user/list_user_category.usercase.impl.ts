import { UserCategoryModel } from "../../data/models/user_category.model";
import { UserCategoryRepository } from "../../domain/repositories/user_category.repository";
import { UserCategoryFailure } from "../../errors/user_category.failure";
import { ListUserCategoryUsecase } from "./list_user_category.usercase";

export class ListUserCategoryUsecaseImpl implements ListUserCategoryUsecase {
  constructor(private userCategoryRepository: UserCategoryRepository) {}

  async execute(): Promise<UserCategoryModel[] | UserCategoryFailure> {
    const user = await this.userCategoryRepository.list();
    return user;
  }
}
