import { ProductModel } from "../../../data/model/product.model";
import { ProductFailure } from "../../../errors/product.failure";
import { ProductRepository } from "../../repositories/product.repository";
import { UpdateProductUsecase } from "./update_product.usecase";

export class UpdateProductUsecaseImpl implements UpdateProductUsecase {
  constructor(private productRepository: ProductRepository) {}

  async execute(
    id: number,
    product: ProductModel
  ): Promise<boolean | ProductFailure> {
    return await this.productRepository.update(id, product);
  }
}
