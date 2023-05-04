import { UserModel } from "../models/user.model";
import { UserDatasource } from "./user.datasource";

export class UserDatasourceImpl implements UserDatasource {
    constructor() {}

    async create(name: string, email: string): Promise<number> {
        // Make the request to the database and create the user

        console.log(
            `User created with name: ${name} and email: ${email}`
        );

        return Promise.resolve(Math.floor(Math.random() * 100));
    }

    async read(id: string): Promise<UserModel> {
        // Make the request to the database and read the user

        return Promise.resolve(
            UserModel.fromString(JSON.stringify({
                'id': 1,
                'name': 'John Doe',
                'email': 'john.doe@mail.com',
            }))
        );
    }
}