import { PokmemonException } from "../../errors/pokemon.exception";
import { PokemonModel } from "../models/pokemon.model";
import { PokemonDatasource } from "./pokemon.datasource";

export class PokemonDatasourceImpl implements PokemonDatasource {
  async read(id: string): Promise<PokemonModel> {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemone = await response.json();

      return Promise.resolve(PokemonModel.fromJSON(pokemone));
    } catch (error) {
      if (error instanceof PokmemonException) {
        throw new PokmemonException(error.message);
      }

      throw new PokmemonException("Error getting pokemon");
    }
  }
}
