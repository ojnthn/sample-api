export class ProductEntity {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly price: number,
    public readonly situation: string
  ) {}
}
