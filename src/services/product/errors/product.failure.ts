import { Failure } from "../../../core/errors/failure";

export class ProductFailure extends Failure {
  constructor(message: string) {
    super(message);
  }
}
