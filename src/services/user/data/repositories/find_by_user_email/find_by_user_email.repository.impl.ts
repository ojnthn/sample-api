import { FindByUserEmailRepository } from "../../../domain/repositories/find_by_user_email/find_by_user_email.repository";
import { UserFailure } from "../../../errors/user.failure";
import { FindByUserEmailDatasource } from "../../datasources/find_by_user_email/find_by_user_email.datasource";

export class FindByUserEmailRepositoryImpl
  implements FindByUserEmailRepository
{
  constructor(private datasource: FindByUserEmailDatasource) {}

  FindByUserEmail(email: string): Promise<string | UserFailure> {
    return this.datasource.findByEmail(email).catch((error) => {
      return new UserFailure(error.message);
    });
  }
}
