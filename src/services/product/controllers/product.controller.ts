import { Request, Response } from "express";
import { CreateProductUsecase } from "../domain/usecases/create_product/create_product.usecase";
import { DeleteProductUseCase } from "../domain/usecases/delete_product/delete_product.usecase";
import { ListProductUsecase } from "../domain/usecases/list_product/list_product.usecase";
import { ReadProductUsecase } from "../domain/usecases/read_product/read_product.usecase";
import { UpdateProductUsecase } from "../domain/usecases/update_product/update_product.usecase";
import { ProductModel } from "../data/model/product.model";
import { Failure } from "../../../core/errors/failure";

export class ProductController {
  constructor(
    private create: CreateProductUsecase,
    private read: ReadProductUsecase,
    private remove: DeleteProductUseCase,
    private update: UpdateProductUsecase,
    private list: ListProductUsecase
  ) {}

  async createProduct(req: Request, res: Response) {
    const response = await this.create.execute(
      ProductModel.fromJSON(JSON.stringify(req.body))
    );

    if (response instanceof Failure) {
      return res.status(400).json({ message: response.message });
    }

    res.status(201).json({ productId: response });
  }

  async readProduct(req: Request, res: Response) {
    const productId = req.params.id;
    const product = await this.read.execute(parseInt(productId));

    if (product instanceof Failure) {
      return res.status(400).json({ message: product.message });
    }

    res.status(200).json(product.toJSON());
  }

  async deleteProduct(req: Request, res: Response) {
    const productId = req.params.id;
    const response = await this.remove.execute(parseInt(productId));

    if (response instanceof Failure) {
      return res.status(400).json({ message: response.message });
    }

    res.status(200).json({ message: "Produto deletado com sucesso." });
  }

  async updateProduct(req: Request, res: Response) {
    const product = ProductModel.fromJSON(JSON.stringify(req.body));
    const response = await this.update.execute(
      parseInt(req.params.id),
      product
    );

    if (response instanceof Failure) {
      return res.status(400).json({ message: response.message });
    }

    res.status(200).json({ message: "Produto atualizado com sucesso." });
  }

  async listProduct(req: Request, res: Response) {
    const products = await this.list.execute();

    if (products instanceof Failure) {
      return res.status(400).json({ message: products.message });
    }

    res.status(200).json(products);
  }
}
