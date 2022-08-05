export class UserEntitie {
  public nome: String;
  public idade: Number;
  public data: String;

  constructor(props: UserEntitie) {
    Object.assign(this, {
      nome: props.nome,
      idade: props.idade,
      data: props.data,
    });
  }
}
