import { UserModel } from "../data/models/user.model";
import { CreateUserUsecase } from "../domain/usecases/create_user/create_user.usecase";
import { Request, Response } from "express";
import { ReadUserUsecase } from "../domain/usecases/read_user/read_user.usecase";
import { Failure } from "../../../core/errors/failure";

export class UserController {
  constructor(
    private create: CreateUserUsecase,
    private read: ReadUserUsecase
  ) {}

  async createUser(req: Request, res: Response) {
    const user = UserModel.fromString(JSON.stringify(req.body));
    const response = await this.create.execute(user.name, user.email);

    if (response instanceof Failure) {
      return res.status(400).json({ message: response.message });
    }

    res.status(201).json({ message: "User created", userId: response });
  }

  async readUser(req: Request, res: Response) {
    const userId = req.params.id;
    const user = await this.read.execute(userId);

    res.status(200).json({ user });
  }
}
