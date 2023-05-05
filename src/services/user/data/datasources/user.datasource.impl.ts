import { UserException } from "../../errors/user.exception";
import { UserModel } from "../models/user.model";
import { UserDatasource } from "./user.datasource";

export class UserDatasourceImpl implements UserDatasource {
  constructor() {}

  async create(name: string, email: string): Promise<number> {
    // Make the request to the database and create the user
    try {
      throw new UserException("Database error");

      return Promise.resolve(Math.floor(Math.random() * 100));
    } catch (error) {
      if (error instanceof UserException) {
        throw new UserException(error.message);
      }

      throw new UserException("Error creating user");
    }
  }

  async read(id: string): Promise<UserModel> {
    // Make the request to the database and read the user

    return Promise.resolve(
      UserModel.fromJSON(
        JSON.stringify({
          id: 1,
          name: "John Doe",
          email: "john.doe@mail.com",
        })
      )
    );
  }
}
