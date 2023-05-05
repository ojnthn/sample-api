import e from "express";
import { PokemonTypeEntity } from "../../domain/entities/pokemon_type.entity";

export class PokemonTypeModel extends PokemonTypeEntity {
  constructor(public name: number, public url: string) {
    super(name, url);
  }

  static fromJSON(json: string) {
    const { name, url } = JSON.parse(json);
    return new PokemonTypeModel(name, url);
  }
}
