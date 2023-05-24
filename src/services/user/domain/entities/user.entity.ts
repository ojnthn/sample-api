export class UserEntity {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly category_id: number,
    public readonly email: string,
    public readonly phone: string,
    public readonly situation: string
  ) {}
}
