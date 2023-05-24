import { UserCategoryModel } from "../../data/models/userCategory.model";
import { UserCategoryRepository } from "../../domain/repositories/userCategory.repository";
import { UserCategoryFailure } from "../../errors/userCategory.failure";
import { ListUserCategoryUsecase } from "./list_userCategory.usercase";

export class ListUserCategoryUsecaseImpl implements ListUserCategoryUsecase {
  constructor(private userCategoryRepository: UserCategoryRepository) {}

  async execute(): Promise<UserCategoryModel[] | UserCategoryFailure> {
    const user = await this.userCategoryRepository.list();
    return user;
  }
}
