import { PokemonModel } from "../models/pokemon.model";

export abstract class PokemonDatasource{
  abstract read(id: string): Promise<PokemonModel>;
}