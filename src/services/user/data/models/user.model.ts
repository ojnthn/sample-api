import { UserEntity } from "../../domain/entities/user.entity";

export class UserModel extends UserEntity {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly telefone: string
  ) {
    super(name, email, telefone);
  }

  public toString() {
    return JSON.stringify({
      name: this.name,
      email: this.email,
      telefone: this.telefone,
    });
  }

  public toJSON() {
    return {
      nome: this.name,
      email: this.email,
      telefone: this.telefone,
    };
  }

  static fromJSON(json: string) {
    const { name, email, telefone } = JSON.parse(json);
    return new UserModel(name, email, telefone);
  }
}
