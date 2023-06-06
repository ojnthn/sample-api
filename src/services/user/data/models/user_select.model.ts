import { UserSelectEntity } from "../../domain/entities/user_select.entity";

export class UserSelectModel extends UserSelectEntity {
  constructor(public id: number | null, public email?: string) {
    super(id, email);
  }

  toJson(): object {
    var obj: object = {};

    if (this.id) {
      obj = { ...obj, id: this.id };
    }

    if (this.email) {
      obj = { ...obj, email: this.email };
    }

    return obj;
  }
}
