import { UserModel } from "../data/models/user.model";
import { CreateUserUsecase } from "../domain/usecases/create_user/create_user.usecase";
import { Request, Response } from "express";
import { ReadUserUsecase } from "../domain/usecases/read_user/read_user.usecase";
import { Failure } from "../../../core/errors/failure";
import { DeleteUserUsecase } from "../domain/usecases/delete_user/delete_user.usecase";
import { UpdateUserUsecase } from "../domain/usecases/update_user/update_user.usercase";
import { ListUserUsecase } from "../domain/usecases/list_user/list_user.usercase";

import { FindByEmailUserUsecase } from "../domain/usecases/findByEmail_user/findByEmail_user.usecase";

export class UserController {
  constructor(
    private create: CreateUserUsecase,
    private read: ReadUserUsecase,
    private remove: DeleteUserUsecase,
    private update: UpdateUserUsecase,
    private list: ListUserUsecase,
    private findByEmail: FindByEmailUserUsecase
  ) {}

  async createUser(req: Request, res: Response) {
    const user = UserModel.fromJSON(JSON.stringify(req.body));

    if (!user.name) {
      return res.status(400).json({ Error: "Name is required" });
    }

    if (user.email) {
      const contactExists = await this.findByEmail.execute(user.email);

      if (contactExists) {
        return res.status(400).json({ error: "This e-mail is already in use" });
      }
    }

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
