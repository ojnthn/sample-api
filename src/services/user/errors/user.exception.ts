import { Exception } from "../../../core/errors/exception";

export class UserException extends Exception {
  constructor(message: string) {
    super(message);
    this.name = "UserException";
  }
}
