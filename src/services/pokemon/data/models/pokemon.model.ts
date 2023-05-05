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

  static fromJSON(json: string) {
    const { id, name, sprites, types } = JSON.parse(json);
    return new PokemonModel(
      id,
      name,
      sprites.front_default,
      types.map((type: any) =>
        PokemonTypeModel.fromJSON(JSON.stringify(type.type))
      )
    );
  }
}
