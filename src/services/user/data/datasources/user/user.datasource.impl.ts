import { UserException } from "../../../errors/user.exception";
import { UserModel } from "../../models/user.model";
import { UserSelectModel } from "../../models/user_select.model";
import { UserDatasource } from "./user.datasource";

export class UserDatasourceImpl implements UserDatasource {
  constructor(private _database: any) {}

  async create(user: UserModel): Promise<number> {
    // Make the request to the database and create the user
    try {
      const id = await this._database
        .insert(user.toJSON())
        .into("usuario")
        .returning("id");

      return Promise.resolve(id[0]);
    } catch (error) {
      if (error instanceof UserException) {
        throw new UserException(error.message);
      }

      throw new UserException("Erro ao criar usuário.");
    }
  }

  async read(userSelect: UserSelectModel): Promise<UserModel> {
    // Make the request to the database and read the user
    try {
      const response: [any] = await this._database
        .table("usuario")
        .select("id", "nome", "email", "telefone", "situacao")
        .where(userSelect.toJson());

      return Promise.resolve(UserModel.fromJSON(JSON.stringify(response[0])));
    } catch (error) {
      if (error instanceof UserException) {
        throw new UserException(error.message);
      }

      throw new UserException("Erro ao buscar usuário.");
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

      throw new UserException("Erro ao deletar usuário.");
    }
  }

  async update(id: number, user: UserModel): Promise<boolean> {
    try {
      await this._database
        .table("usuario")
        .where("id", id)
        .update(user.toJSON());

      return Promise.resolve(true);
    } catch (error) {
      if (error instanceof UserException) {
        throw new UserException(error.message);
      }
      throw new UserException("Erro ao atualizar usuário.");
    }
  }

  async list(): Promise<UserModel[]> {
    try {
      const response: [any] = await this._database
        .table("usuario")
        .select("id", "nome", "email", "telefone", "situacao")
        .orderBy("id");

      return Promise.resolve(
        response.map((user) => UserModel.fromJSON(JSON.stringify(user)))
      );
    } catch (error) {
      if (error instanceof UserException) {
        throw new UserException(error.message);
      }

      throw new UserException("Erro ao listar usuários.");
    }
  }
}
