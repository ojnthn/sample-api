import { UserEntity } from "../../domain/entities/user.entity";

export class UserModel extends UserEntity {
  constructor(
    public readonly id: number,
    public readonly nome: string,
    public readonly email: string,
    public readonly telefone: string
  ) {
    super(id, nome, email, telefone);
  }

  public toString() {
    return JSON.stringify({
      id: this.id,
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
    });
  }

  public toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
    };
  }

  static fromJSON(json: string) {
    const { id, nome, email, telefone } = JSON.parse(json);
    return new UserModel(id, nome, email, telefone);
  }
}
