import { UserEntity } from "../../domain/entities/user.entity";

export class UserModel extends UserEntity {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly category_id: number,
    public readonly email: string,
    public readonly phone: string,
    public readonly situation: string
  ) {
    super(id, name, category_id, email, phone, situation);
  }

  public toString() {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      category_id: this.category_id,
      email: this.email,
      phone: this.phone,
      situation: this.situation,
    });
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      category_id: this.category_id,
      email: this.email,
      phone: this.phone,
      situation: this.situation,
    };
  }

  static fromJSON(json: string) {
    const { id, name, category_id, email, phone, situation } = JSON.parse(json);
    return new UserModel(id, name, category_id, email, phone, situation);
  }
}
