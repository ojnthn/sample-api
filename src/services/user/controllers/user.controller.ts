import { UserModel } from "../data/models/user.model";
import { CreateUserUsecase } from "../domain/usecases/create_user/create_user.usecase";
import { Request, Response } from "express";
import { ReadUserUsecase } from "../domain/usecases/read_user/read_user.usecase";
import { Failure } from "../../../core/errors/failure";
import { DeleteUserUsecase } from "../domain/usecases/delete_user/delete_user.usecase";
import { UserRepository } from "../domain/repositories/user.repository";
import { UpdateUserUsecase } from "../domain/usecases/update_user/update_user.usercase";
import { ListUserUsecase } from "../domain/usecases/list_user/list_user.usercase";

export class UserController {
  constructor(
    private create: CreateUserUsecase,
    private read: ReadUserUsecase,
    private remove: DeleteUserUsecase,
    private update: UpdateUserUsecase,
    private list: ListUserUsecase
  ) {}

  async createUser(req: Request, res: Response) {
    const user = UserModel.fromJSON(JSON.stringify(req.body));
    const response = await this.create.execute(
      UserModel.fromJSON(JSON.stringify(req.body))
    );

    if (response instanceof Failure) {
      return res.status(400).json({ message: response.message });
    }

    res.status(201).json({ userId: response });
  }

  async readUser(req: Request, res: Response) {
    const userId = req.params.id;
    const user = await this.read.execute(parseInt(userId));

    if (user instanceof Failure) {
      return res.status(400).json({ message: user.message });
    }

    res.status(200).json(user.toJSON());
  }

  async deleteUser(req: Request, res: Response) {
    const userId = req.params.id;
    const response = await this.remove.execute(parseInt(userId));

    if (response instanceof Failure) {
      return res.status(400).json({ message: response.message });
    }

    res.status(200).json({ message: "User deleted successfully" });
  }

  async updateUser(req: Request, res: Response) {
    const user = UserModel.fromJSON(JSON.stringify(req.body));
    const response = await this.update.execute(parseInt(req.params.id), user);

    if (response instanceof Failure) {
      return res.status(400).json({ message: response.message });
    }
    res.status(200).json({ message: "User updated sucessfully" });
  }

  async listUser(req: Request, res: Response) {
    const users = await this.list.execute();

    if (users instanceof Failure) {
      return res.status(400).json({ message: users.message });
    }

    res.status(200).json(users);
  }
}
