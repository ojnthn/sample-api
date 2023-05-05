import { PokemonModel } from "../../data/models/pokemon.model";

export abstract class PokemonRepository{
  abstract read(id: string): Promise<PokemonModel>
}