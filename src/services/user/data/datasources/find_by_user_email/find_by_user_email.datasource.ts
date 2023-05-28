export abstract class FindByUserEmailDatasource {
  abstract findByEmail(email: string): Promise<string>;
}
