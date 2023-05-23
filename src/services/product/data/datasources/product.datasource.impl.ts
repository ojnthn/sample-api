import { ProductException } from "../../errors/product.exception";
import { ProductModel } from "../model/product.model";
import { ProductDatasource } from "./product.datasource";

export class ProductDatasourceImpl implements ProductDatasource {
  constructor(private _database: any) {}

  async create(product: ProductModel): Promise<number> {
    try {
      const id = await this._database
        .insert(product.toJSON())
        .into("produtos")
        .returning("id");
      return Promise.resolve(id[0]);
    } catch (error) {
      if (error instanceof ProductException) {
        throw new ProductException(error.message);
      }

      throw new ProductException("Error creating product");
    }
  }

  async read(id: number): Promise<ProductModel> {
    try {
      const response: [any] = await this._database
        .table("produtos")
        .select("id", "descricao", "valor")
        .where("id", id);

      return Promise.resolve(
        ProductModel.fromJSON(
          JSON.stringify({
            id: response[0].id,
            descricao: response[0].descricao,
            valor: response[0].valor,
          })
        )
      );
    } catch (error) {
      if (error instanceof ProductException) {
        throw new ProductException(error.message);
      }

      throw new ProductException("Error reading product");
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this._database.table("produtos").where("id", id).del();

      return Promise.resolve(true);
    } catch (error) {
      if (error instanceof ProductException) {
        throw new ProductException(error.message);
      }

      throw new ProductException("Error deleting product");
    }
  }

  async update(id: number, product: ProductModel): Promise<boolean> {
    try {
      await this._database
        .table("produtos")
        .where("id", id)
        .update(product.toJSON());

      return Promise.resolve(true);
    } catch (error) {
      if (error instanceof ProductException) {
        throw new ProductException(error.message);
      }
      throw new ProductException("Error updating product");
    }
  }

  async list(): Promise<ProductModel[]> {
    try {
      const response: [any] = await this._database
        .table("produtos")
        .select("id", "descricao", "valor");

      return Promise.resolve(
        response.map((product) =>
          ProductModel.fromJSON(
            JSON.stringify({
              id: product.id,
              descricao: product.descricao,
              valor: product.valor,
            })
          )
        )
      );
    } catch (error) {
      console.log(error);
      // if (error instanceof ProductException) {
      //   throw new ProductException(error.message);
      // }

      throw new ProductException("Error creating product");
    }
  }
}
