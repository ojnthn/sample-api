import { ProductFailure } from "../../../errors/product.failure";
import { ProductRepository } from "../../repositories/product.repository";
import { DeleteProductUseCase } from "./delete_product.usecase";

export class DeleteProductUsecaseImpl implements DeleteProductUseCase {
  constructor(private _repository: ProductRepository) {}

  async execute(id: number): Promise<boolean | ProductFailure> {
    try {
      return await this._repository.delete(id);
    } catch (error) {
      if (error instanceof ProductFailure) {
        throw new ProductFailure(error.message);
      }

      throw new ProductFailure("Error deleting product");
    }
  }
}
