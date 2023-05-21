export class ProductEntity {
  constructor(
    public readonly id: number,
    public readonly descricao: string,
    public readonly valor: number
  ) {}
}
