import { ProductModel } from "../../../data/model/product.model";
import { ProductFailure } from "../../../errors/product.failure";

export abstract class CreateProductUsecase {
  abstract execute(product: ProductModel): Promise<number | ProductFailure>;
}
