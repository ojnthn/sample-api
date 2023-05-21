import { ProductModel } from "../../../data/model/product.model";
import { ProductFailure } from "../../../errors/product.failure";

export abstract class ReadProductUsecase {
  abstract execute(id: number): Promise<ProductModel | ProductFailure>;
}
