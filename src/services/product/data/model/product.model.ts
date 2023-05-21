import { ProductEntity } from "../../domain/entities/product.entity";

export class ProductModel extends ProductEntity {
  constructor(
    public readonly id: number,
    public readonly descricao: string,
    public readonly valor: number
  ) {
    super(id, descricao, valor);
  }

  public toString() {
    return JSON.stringify({
      id: this.id,
      descricao: this.descricao,
      valor: this.valor,
    });
  }

  public toJSON() {
    return {
      id: this.id,
      descricao: this.descricao,
      valor: this.valor,
    };
  }

  static fromJSON(json: string) {
    const { id, descricao, valor } = JSON.parse(json);
    return new ProductModel(id, descricao, valor);
  }
}
