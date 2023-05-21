import { ProductFailure } from "../../../errors/product.failure";

export abstract class DeleteProductUseCase {
  abstract execute(id: number): Promise<boolean | ProductFailure>;
}
