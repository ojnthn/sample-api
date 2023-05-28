import { ProductException } from "../../errors/product.exception";
import { ProductModel } from "../model/product.model";
import { ProductDatasource } from "./product.datasource";

export class ProductDatasourceImpl implements ProductDatasource {
  constructor(private _database: any) {}

  async create(product: ProductModel): Promise<number> {
    try {
      const id = await this._database
        .insert(product.toJSON())
        .into("products")
        .returning("id");
      return Promise.resolve(id[0]);
    } catch (error) {
      if (error instanceof ProductException) {
        throw new ProductException(error.message);
      }

      throw new ProductException("Erro ao criar produto.");
    }
  }

  async read(id: number): Promise<ProductModel> {
    try {
      const response: [any] = await this._database
        .table("products")
        .select("id", "name", "price", "situation", "category_id")
        .where("id", id);

      return Promise.resolve(
        ProductModel.fromJSON(
          JSON.stringify({
            id: response[0].id,
            name: response[0].name,
            price: response[0].price,
            situation: response[0].situation,
            category_id: response[0].category_id,
          })
        )
      );
    } catch (error) {
      if (error instanceof ProductException) {
        throw new ProductException(error.message);
      }

      throw new ProductException("Erro ao buscar produto.");
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this._database.table("products").where("id", id).del();

      return Promise.resolve(true);
    } catch (error) {
      if (error instanceof ProductException) {
        throw new ProductException(error.message);
      }

      throw new ProductException("Erro ao deletar produto.");
    }
  }

  async update(id: number, product: ProductModel): Promise<boolean> {
    try {
      await this._database
        .table("products")
        .where("id", id)
        .update(product.toJSON());

      return Promise.resolve(true);
    } catch (error) {
      if (error instanceof ProductException) {
        throw new ProductException(error.message);
      }
      throw new ProductException("Erro ao atualizar produto.");
    }
  }

  async list(): Promise<ProductModel[]> {
    try {
      const response: [any] = await this._database
        .table("products")
        .select("id", "name", "price", "situation", "category_id");

      return Promise.resolve(
        response.map((product) =>
          ProductModel.fromJSON(
            JSON.stringify({
              id: product.id,
              name: product.name,
              price: product.price,
              situation: product.situation,
              category_id: product.category_id,
            })
          )
        )
      );
    } catch (error) {
      if (error instanceof ProductException) {
        throw new ProductException(error.message);
      }

      throw new ProductException("Erro ao listar produtos.");
    }
  }
}
