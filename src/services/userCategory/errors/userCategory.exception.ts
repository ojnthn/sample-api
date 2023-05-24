import { Exception } from "../../../core/errors/exception";

export class UserCategoryException extends Exception {
  constructor(message: string) {
    super(message);
    this.name = "UserException";
  }
}
