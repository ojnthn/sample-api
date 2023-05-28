import { UserCategoryEntity } from "../../domain/entities/user_category.entity";

export class UserCategoryModel extends UserCategoryEntity {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly situation: string
  ) {
    super(id, name, situation);
  }

  public toString() {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      situation: this.situation,
    });
  }

  public toJSON() {
    return {
      id: this.id,
      name: this.name,
      situation: this.situation,
    };
  }

  static fromJSON(json: string) {
    const { id, name, situation } = JSON.parse(json);
    return new UserCategoryModel(id, name, situation);
  }
}
