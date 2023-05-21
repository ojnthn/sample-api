import { ProductController } from "../controllers/product.controller";
import { ProductDatasource } from "../data/datasources/product.datasource";
import { ProductDatasourceImpl } from "../data/datasources/product.datasource.impl";
import { ProductRepositoryImpl } from "../data/repositories/product.repository.impl";
import { ProductRepository } from "../domain/repositories/product.repository";
import { CreateProductUsecaseImpl } from "../domain/usecases/create_product/create_product.usecase.impl";
import { DeleteProductUsecaseImpl } from "../domain/usecases/delete_product/delete_product.usecase.impl";
import { ListProductUsecaseImpl } from "../domain/usecases/list_product/list_product.usecase.impl";
import { ReadProductUsecaseImpl } from "../domain/usecases/read_product/read_product.usecase.impl";
import { UpdateProductUsecaseImpl } from "../domain/usecases/update_product/update_product.usecase.impl";

export class ProductInject {
  private productController: ProductController;

  constructor(private database: any) {
    const productDatasource: ProductDatasource = new ProductDatasourceImpl(
      database
    );

    const productRepository: ProductRepository = new ProductRepositoryImpl(
      productDatasource
    );

    this.productController = new ProductController(
      new CreateProductUsecaseImpl(productRepository),
      new ReadProductUsecaseImpl(productRepository),
      new DeleteProductUsecaseImpl(productRepository),
      new UpdateProductUsecaseImpl(productRepository),
      new ListProductUsecaseImpl(productRepository)
    );
  }

  getProductController(): ProductController {
    return this.productController;
  }
}
