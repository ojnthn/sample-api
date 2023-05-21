import { ProductModel } from "../../../data/model/product.model";
import { ProductFailure } from "../../../errors/product.failure";
import { ProductRepository } from "../../repositories/product.repository";
import { ListProductUsecase } from "./list_product.usecase";

export class ListProductUsecaseImpl implements ListProductUsecase {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<ProductModel[] | ProductFailure> {
    const product = await this.productRepository.list();
    return product;
  }
}
