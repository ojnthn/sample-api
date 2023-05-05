import { PokemonTypeEntity } from "./pokemon_type.entity";

export class PokemonEntity {
  constructor(
    public id: number,
    public name: string,
    public sprite: string,
    public types: PokemonTypeEntity[]
  ) {}
}
