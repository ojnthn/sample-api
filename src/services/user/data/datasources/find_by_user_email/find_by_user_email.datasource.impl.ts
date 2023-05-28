import { UserException } from "../../../errors/user.exception";
import { FindByUserEmailDatasource } from "./find_by_user_email.datasource";

export class FindByUserEmailDatasourceImpl
  implements FindByUserEmailDatasource
{
  constructor(private _database: any) {}

  async findByEmail(email: string): Promise<string> {
    try {
      const [row]: any = await this._database
        .table("users")
        .select("id", "email")
        .where("email", email);

      return Promise.resolve(row);
    } catch (error) {
      if (error instanceof UserException) {
        throw new UserException(error.message);
      }

      throw new UserException("Error finding email");
    }
  }
}
