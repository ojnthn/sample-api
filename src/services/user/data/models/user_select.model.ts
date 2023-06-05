import { UserSelectEntity } from "../../domain/entities/user_select.entity";

export class UserSelectModel extends UserSelectEntity {
  constructor(public id: number | null, public email?: string) {
    super(id, email);
  }

  toJson(): object {
    var obj: object = {};

    if (this.id !== null && this.id !== undefined) {
      obj = { ...obj, id: this.id };
    }

    if (this.email !== null && this.email !== undefined) {
      obj = { ...obj, email: this.email };
    }

    return obj;
  }
}
