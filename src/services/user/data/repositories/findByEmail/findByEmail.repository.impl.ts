import { FindByEmailRepository } from "../../../domain/repositories/findByEmail/findByEmail.repository";
import { UserFailure } from "../../../errors/user.failure";
import { FindByEmailDatasource } from "../../datasources/findByEmail_user/findByEmail.datasource";

export class FindByEmailRepositoryImpl implements FindByEmailRepository {
  constructor(private datasource: FindByEmailDatasource) {}

  FindByEmail(email: string): Promise<string | UserFailure> {
    return this.datasource.findByEmail(email).catch((error) => {
      return new UserFailure(error.message);
    });
  }
}
