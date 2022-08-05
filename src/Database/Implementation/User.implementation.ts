import "../../Schema/Entitie/User.entitie";
import { UserEntitie } from "../../Schema/Entitie/User.entitie";
import { DateHelper } from "../../Helper/Date.helper";

interface SelectInterface {
  nome?: String;
  idade?: number;
}

export class UserImplementation {
  select(data: SelectInterface): UserEntitie[] {
    let list: UserEntitie[] = [];

    list.push(
      new UserEntitie({
        nome: "Primeiro Usuário",
        idade: 22,
        data: new DateHelper().current_date(),
      })
    );

    list.push(
      new UserEntitie({
        nome: "Segundo Usuário",
        idade: 23,
        data: new DateHelper().current_date(),
      })
    );

    list.push(
      new UserEntitie({
        nome: "Terceiro Usuário",
        idade: 24,
        data: new DateHelper().current_date(),
      })
    );

    return list;
  }
}
