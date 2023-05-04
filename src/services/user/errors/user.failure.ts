import { Failure } from "../../../core/errors/failure";

export class UserFailure extends Failure {
  constructor(message: string) {
    super(message);
  }
}
