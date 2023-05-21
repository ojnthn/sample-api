import { ProductModel } from "../../../data/model/product.model";
import { ProductFailure } from "../../../errors/product.failure";

export abstract class ListProductUsecase {
  abstract execute(): Promise<ProductModel[] | ProductFailure>;
}
