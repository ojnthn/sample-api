import { UserModel } from "../../data/models/user.model";

export abstract class UserRepository {
    abstract create(name: string, email: string): Promise<number>;
    abstract read(id: string): Promise<UserModel>;
}