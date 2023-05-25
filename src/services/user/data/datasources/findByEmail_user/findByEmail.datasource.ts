export abstract class FindByEmailDatasource {
  abstract findByEmail(email: string): Promise<string>;
}
