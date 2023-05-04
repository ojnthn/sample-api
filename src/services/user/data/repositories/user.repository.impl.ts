import { UserRepository } from "../../domain/repositories/user.repository";
import { UserDatasource } from "../datasources/user.datasource";
import { UserDatasourceImpl } from "../datasources/user.datasource.impl";
import { UserModel } from "../models/user.model";

export class UserRepositoryImpl implements UserRepository {
    constructor(
        private datasource: UserDatasource
    ) {}

    create(name: string, email: string): Promise<number> {
        return this.datasource.create(name, email);
    };
        
    
    read(id: string): Promise<UserModel> {
        return this.datasource.read(id);
    }

}