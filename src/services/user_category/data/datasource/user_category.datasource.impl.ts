import { UserCategoryException } from "../../errors/user_category.exception";
import { UserCategoryModel } from "../models/user_category.model";
import { UserCategoryDatasource } from "./user_category.datasource";

export class UserCategoryDatasourceImpl implements UserCategoryDatasource {
  constructor(private _database: any) {}

  async create(category: UserCategoryModel): Promise<number> {
    try {
      const id = await this._database
        .insert(category.toJSON())
        .into("user_categories")
        .returning("id");

      return Promise.resolve(id[0]);
    } catch (error) {
      if (error instanceof UserCategoryException) {
        throw new UserCategoryException(error.message);
      }

      throw new UserCategoryException("Erro ao criar categoria de usuário.");
    }
  }

  async read(id: number): Promise<UserCategoryModel> {
    try {
      const response: [any] = await this._database
        .table("user_categories")
        .select("id", "name", "situation")
        .where("id", id);

      return Promise.resolve(
        UserCategoryModel.fromJSON(
          JSON.stringify({
            id: response[0].id,
            name: response[0].name,
            situation: response[0].situation,
          })
        )
      );
    } catch (error) {
      if (error instanceof UserCategoryException) {
        throw new UserCategoryException(error.message);
      }

      throw new UserCategoryException("Erro ao buscar categoria de usuário.");
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this._database.table("user_categories").where("id", id).del();

      return Promise.resolve(true);
    } catch (error) {
      if (error instanceof UserCategoryException) {
        throw new UserCategoryException(error.message);
      }

      throw new UserCategoryException("Erro ao deletar categoria de usuário.");
    }
  }

  async update(id: number, category: UserCategoryModel): Promise<boolean> {
    try {
      await this._database
        .table("user_categories")
        .where("id", id)
        .update(category.toJSON());

      return Promise.resolve(true);
    } catch (error) {
      if (error instanceof UserCategoryException) {
        throw new UserCategoryException(error.message);
      }
      throw new UserCategoryException(
        "Erro ao atualizar categoria de usuário."
      );
    }
  }

  async list(): Promise<UserCategoryModel[]> {
    try {
      const response: [any] = await this._database
        .table("user_categories")
        .select("id", "name", "situation")
        .orderBy("id");

      return Promise.resolve(
        response.map((category) =>
          UserCategoryModel.fromJSON(
            JSON.stringify({
              id: category.id,
              name: category.name,
              situation: category.situation,
            })
          )
        )
      );
    } catch (error) {
      if (error instanceof UserCategoryException) {
        throw new UserCategoryException(error.message);
      }

      throw new UserCategoryException("Erro ao listar categorias de usuário.");
    }
  }
}
