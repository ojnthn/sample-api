import { UserCategoryModel } from "../data/models/user_category.model";
import { CreateUserCategoryUsecase } from "../usecases/create_user/create_user_category.usecase";
import { DeleteUserCategoryUsecase } from "../usecases/delete_user/delete_user_category.usecase";
import { ListUserCategoryUsecase } from "../usecases/list_user/list_user_category.usercase";
import { ReadUserCategoryUsecase } from "../usecases/read_user/read_user_category.usecase";
import { UpdateUserCategoryUsecase } from "../usecases/update_user/update_user_category.usercase";

import { Request, Response } from "express";
import { Failure } from "../../../core/errors/failure";

export class UserCategoryController {
  constructor(
    private create: CreateUserCategoryUsecase,
    private read: ReadUserCategoryUsecase,
    private remove: DeleteUserCategoryUsecase,
    private update: UpdateUserCategoryUsecase,
    private list: ListUserCategoryUsecase
  ) {}

  async createUserCategory(req: Request, res: Response) {
    const userCategory = UserCategoryModel.fromJSON(JSON.stringify(req.body));

    if (!userCategory.name) {
      return res
        .status(400)
        .json({ Error: "O nome da categoria é obrigatório." });
    }

    const response = await this.create.execute(
      UserCategoryModel.fromJSON(JSON.stringify(req.body))
    );

    if (response instanceof Failure) {
      return res.status(400).json({ message: response.message });
    }

    res.status(201).json({ userCategoryId: response });
  }

  async readUserCategory(req: Request, res: Response) {
    const userCategoryId = req.params.id;
    const userCategory = await this.read.execute(parseInt(userCategoryId));

    if (userCategory instanceof Failure) {
      return res.status(400).json({ message: userCategory.message });
    }

    res.status(200).json(userCategory.toJSON());
  }

  async deleteUserCategory(req: Request, res: Response) {
    const userCategoryId = req.params.id;
    const response = await this.remove.execute(parseInt(userCategoryId));

    if (response instanceof Failure) {
      return res.status(400).json({ message: response.message });
    }

    res
      .status(200)
      .json({ message: "Categoria de usuário deletada com sucesso." });
  }

  async updateUserCategory(req: Request, res: Response) {
    const userCategory = UserCategoryModel.fromJSON(JSON.stringify(req.body));

    const response = await this.update.execute(
      parseInt(req.params.id),
      userCategory
    );

    if (response instanceof Failure) {
      return res.status(400).json({ message: response.message });
    }
    res
      .status(200)
      .json({ message: "Categoria de usuário atualizada com sucesso." });
  }

  async listUserCategory(req: Request, res: Response) {
    const userCategories = await this.list.execute();

    if (userCategories instanceof Failure) {
      return res.status(400).json({ message: userCategories.message });
    }

    res.status(200).json(userCategories);
  }
}