import { UserModel } from "../data/models/user.model";
import { CreateUserUsecase } from "../domain/usecases/create_user/create_user.usecase";
import { Request, Response } from "express";
import { ReadUserUsecase } from "../domain/usecases/read_user/read_user.usecase";
import { Failure } from "../../../core/errors/failure";
import { DeleteUserUsecase } from "../domain/usecases/delete_user/delete_user.usecase";

export class UserController {
  constructor(
    private create: CreateUserUsecase,
    private read: ReadUserUsecase,
    private remove: DeleteUserUsecase
  ) {}

  async createUser(req: Request, res: Response) {
    const user = UserModel.fromJSON(JSON.stringify(req.body));
    const response = await this.create.execute(
      user.name,
      user.email,
      user.telefone
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
}
