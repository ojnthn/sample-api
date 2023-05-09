import { PokemonEntity } from "../../domain/entities/pokemon.entity";
import { PokemonTypeModel } from "./pokemon_type.model";

export class PokemonModel extends PokemonEntity {
  constructor(
    public id: number,
    public name: string,
    public sprite: string,
    public types: PokemonTypeModel[]
  ) {
    super(id, name, sprite, types);
  }

  // Conversão de JSON para Objeto
  static fromJSON(stringedJSON: string) {
    // Conversão de string para JSON
    const json = JSON.parse(stringedJSON);

    const id: number = json.id;
    const name: string = json.forms[0].name;
    const sprites: {
      front_default: string;
    } = {
      front_default: json.sprites.front_default,
    };

    const types: PokemonTypeModel[] = json.types.map((type: any) =>
      PokemonTypeModel.fromJSON(JSON.stringify(type))
    );

    return new PokemonModel(id, name, sprites.front_default, types);
  }
}
