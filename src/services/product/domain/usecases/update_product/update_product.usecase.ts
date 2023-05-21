import { ProductModel } from "../../../data/model/product.model";
import { ProductFailure } from "../../../errors/product.failure";

export abstract class UpdateProductUsecase {
  abstract execute(
    id: number,
    product: ProductModel
  ): Promise<boolean | ProductFailure>;
}
