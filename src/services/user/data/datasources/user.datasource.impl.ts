import { UserException } from "../../errors/user.exception";
import { UserModel } from "../models/user.model";
import { UserDatasource } from "./user.datasource";

export class UserDatasourceImpl implements UserDatasource {
  constructor(private _database: any) {}

  async create(name: string, email: string, telefone: string): Promise<number> {
    // Make the request to the database and create the user
    try {
      const id: [number] = await this._database
        .table("usuario")
        .insert({
          nome: name,
          email,
          telefone,
        })
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
        .table("usuario")
        .select("id", "nome", "email", "telefone")
        .where("id", id);

      console.log(id);

      return Promise.resolve(
        UserModel.fromJSON(
          JSON.stringify({
            id: response[0].id,
            name: response[0].nome,
            email: response[0].email,
            telefone: response[0].telefone,
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
      await this._database.table("usuario").where("id", id).del();

      return Promise.resolve(true);
    } catch (error) {
      if (error instanceof UserException) {
        throw new UserException(error.message);
      }

      throw new UserException("Error deleting user");
    }
  }
}
