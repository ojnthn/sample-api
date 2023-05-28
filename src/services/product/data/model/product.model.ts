import { ProductEntity } from "../../domain/entities/product.entity";

export class ProductModel extends ProductEntity {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly price: number,
    public readonly situation: string,
    public readonly category_id: number
  ) {
    super(id, name, price, situation, category_id);
  }

  public toString() {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      price: this.price,
      situation: this.situation,
      category_id: this.category_id,
    });
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      situation: this.situation,
      category_id: this.category_id,
    };
  }

  static fromJSON(json: string) {
    const { id, name, price, situation, category_id } = JSON.parse(json);
    return new ProductModel(id, name, price, situation, category_id);
  }
}
