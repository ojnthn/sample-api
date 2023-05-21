import { ProductModel } from "../../../data/model/product.model";
import { ProductFailure } from "../../../errors/product.failure";
import { ProductRepository } from "../../repositories/product.repository";
import { CreateProductUsecase } from "./create_product.usecase";

export class CreateProductUsecaseImpl implements CreateProductUsecase {
  constructor(private productRepository: ProductRepository) {}

  async execute(product: ProductModel): Promise<number | ProductFailure> {
    const id = await this.productRepository.create(product);
    return id;
  }
}
