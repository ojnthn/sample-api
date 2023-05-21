import { ProductModel } from "../../data/model/product.model";
import { ProductFailure } from "../../errors/product.failure";

export abstract class ProductRepository {
  abstract create(product: ProductModel): Promise<number | ProductFailure>;
  abstract read(id: number): Promise<ProductModel | ProductFailure>;
  abstract delete(id: number): Promise<boolean | ProductFailure>;
  abstract update(
    id: number,
    product: ProductModel
  ): Promise<boolean | ProductFailure>;
  abstract list(): Promise<ProductModel[] | ProductFailure>;
}
