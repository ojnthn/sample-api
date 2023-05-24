import { Failure } from "../../../core/errors/failure";

export class UserCategoryFailure extends Failure {
  constructor(message: string) {
    super(message);
  }
}
