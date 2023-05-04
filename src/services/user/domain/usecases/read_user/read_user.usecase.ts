import { UserModel } from "../../../data/models/user.model";

export abstract class ReadUserUsecase {
    abstract execute(id: string): Promise<UserModel>;
}