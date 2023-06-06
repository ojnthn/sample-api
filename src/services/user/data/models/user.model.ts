import { UserEntity } from "../../domain/entities/user.entity";

export class UserModel extends UserEntity {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly email: string,
    public readonly phone: string,
    public readonly situation: string
  ) {
    super(id, name, email, phone, situation);
  }

  public toString() {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      situation: this.situation,
    });
  }

  public toJSON() {
    return {
      id: this.id,
      nome: this.name,
      email: this.email,
      telefone: this.phone,
      situacao: this.situation ?? "Ativo",
    };
  }

  static fromJSON(json: string) {
    const { id, nome, email, telefone, situacao } = JSON.parse(json);
    return new UserModel(id, nome, email, telefone, situacao);
  }
}
