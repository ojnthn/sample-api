import { UserEntity } from "../../domain/entities/user.entity";

export class UserModel extends UserEntity {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string
  ) {
    super(id, name, email);
  }

  public toString() {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      email: this.email,
    });
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }

  static fromJSON(json: string) {
    const { id, name, email } = JSON.parse(json);
    return new UserModel(id, name, email);
  }
}
