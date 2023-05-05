import { PokemonModel } from "../../../data/models/pokemon.model";

export abstract class ReadPokemonUsecase{
  abstract execute(id: string): Promise<PokemonModel>;
}