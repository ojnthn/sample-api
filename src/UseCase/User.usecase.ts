import { UserImplementation } from "../Database/Implementation/User.implementation";

export class UserUsecase {
  public user_implementation: UserImplementation = new UserImplementation();

  list(): UserEntitie[] {
    let list: UserEntitie[] = [];

    list = this.user_implementation.select({});

    return list;
  }
}
