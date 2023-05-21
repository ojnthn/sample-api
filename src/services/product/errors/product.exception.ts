import { Exception } from "../../../core/errors/exception";

export class ProductException extends Exception {
  constructor(message: string) {
    super(message);
    this.name = "ProductException";
  }
}
