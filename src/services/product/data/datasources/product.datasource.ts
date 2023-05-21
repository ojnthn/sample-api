import { ProductModel } from "../model/product.model";

export abstract class ProductDatasource {
  abstract create(product: ProductModel): Promise<number>;
  abstract read(id: number): Promise<ProductModel>;
  abstract delete(id: number): Promise<boolean>;
  abstract update(id: number, product: ProductModel): Promise<boolean>;
  abstract list(): Promise<ProductModel[]>;
}
