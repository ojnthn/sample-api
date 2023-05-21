import { ProductRepository } from "../../domain/repositories/product.repository";
import { ProductFailure } from "../../errors/product.failure";
import { ProductDatasource } from "../datasources/product.datasource";
import { ProductModel } from "../model/product.model";

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private datasource: ProductDatasource) {}

  create(produto: ProductModel): Promise<number | ProductFailure> {
    return this.datasource.create(produto).catch((error) => {
      return new ProductFailure(error.message);
    });
  }

  read(id: number): Promise<ProductModel | ProductFailure> {
    return this.datasource.read(id).catch((error) => {
      return new ProductFailure(error.message);
    });
  }

  delete(id: number): Promise<boolean | ProductFailure> {
    return this.datasource.delete(id).catch((error) => {
      return new ProductFailure(error.message);
    });
  }

  update(id: number, produto: ProductModel): Promise<boolean | ProductFailure> {
    return this.datasource.update(id, produto).catch((error) => {
      return new ProductFailure(error.message);
    });
  }

  list(): Promise<ProductModel[] | ProductFailure> {
    return this.datasource.list().catch((error) => {
      return new ProductFailure(error.message);
    });
  }
}
