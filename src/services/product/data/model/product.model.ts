import { ProductEntity } from "../../domain/entities/product.entity";

export class ProductModel extends ProductEntity {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly price: number,
    public readonly situation: string
  ) {
    super(id, name, price, situation);
  }

  public toString() {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      price: this.price,
      situation: this.situation,
    });
  }

  public toJSON() {
    return {
      id: this.id,
      nome: this.name,
      preco: this.price,
      situacao: this.situation,
    };
  }

  static fromJSON(json: string) {
    const { id, nome, preco, situacao } = JSON.parse(json);
    return new ProductModel(id, nome, preco, situacao);
  }
}
