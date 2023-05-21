import { ProductModel } from "../../../data/model/product.model";
import { ProductFailure } from "../../../errors/product.failure";
import { ProductRepository } from "../../repositories/product.repository";
import { ReadProductUsecase } from "./read_product.usecase";

export class ReadProductUsecaseImpl implements ReadProductUsecase {
  constructor(private productRepository: ProductRepository) {}

  async execute(id: number): Promise<ProductModel | ProductFailure> {
    const product = await this.productRepository.read(id);
    return product;
  }
}
