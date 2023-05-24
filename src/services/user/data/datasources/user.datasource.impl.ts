import { UserException } from "../../errors/user.exception";
import { UserModel } from "../models/user.model";
import { UserDatasource } from "./user.datasource";

export class UserDatasourceImpl implements UserDatasource {
  constructor(private _database: any) {}

  async create(user: UserModel): Promise<number> {
    // Make the request to the database and create the user
    try {
      const id = await this._database
        .insert(user.toJSON())
        .into("users")
        .returning("id");

      return Promise.resolve(id[0]);
    } catch (error) {
      if (error instanceof UserException) {
        throw new UserException(error.message);
      }

      throw new UserException("Error creating user");
    }
  }

  async read(id: number): Promise<UserModel> {
    // Make the request to the database and read the user
    try {
      const response: [any] = await this._database
        .table("users")
        .select("id", "name", "category_id", "email", "phone", "situation")
        .where("id", id);

      return Promise.resolve(
        UserModel.fromJSON(
          JSON.stringify({
            id: response[0].id,
            name: response[0].name,
            category_id: response[0].category_id,
            email: response[0].email,
            phone: response[0].phone,
            situation: response[0].situation,
          })
        )
      );
    } catch (error) {
      if (error instanceof UserException) {
        throw new UserException(error.message);
      }

      throw new UserException("Error reading user");
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this._database.table("users").where("id", id).del();

      return Promise.resolve(true);
    } catch (error) {
      if (error instanceof UserException) {
        throw new UserException(error.message);
      }

      throw new UserException("Error deleting user");
    }
  }

  async update(id: number, user: UserModel): Promise<boolean> {
    try {
      await this._database.table("users").where("id", id).update(user.toJSON());

      return Promise.resolve(true);
    } catch (error) {
      if (error instanceof UserException) {
        throw new UserException(error.message);
      }
      throw new UserException("Error updating user");
    }
  }

  async list(): Promise<UserModel[]> {
    try {
      const response: [any] = await this._database
        .table("users")
        .select("id", "name", "category_id", "email", "phone", "situation")
        .orderBy("id");

      return Promise.resolve(
        response.map((user) =>
          UserModel.fromJSON(
            JSON.stringify({
              id: user.id,
              name: user.name,
              category_id: user.category_id,
              email: user.email,
              phone: user.phone,
              situation: user.situation,
            })
          )
        )
      );
    } catch (error) {
      if (error instanceof UserException) {
        throw new UserException(error.message);
      }

      throw new UserException("Error listing users");
    }
  }
}
