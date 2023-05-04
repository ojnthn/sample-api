import { UserModel } from "../models/user.model";

export abstract class UserDatasource {
    abstract create(name: string, email: string): Promise<number>;
    abstract read(id: string): Promise<UserModel>;
}