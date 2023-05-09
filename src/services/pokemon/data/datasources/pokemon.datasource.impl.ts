import { PokemonModel } from "../models/pokemon.model";
import { PokemonDatasource } from "./pokemon.datasource";

export class PokemonDatasourceImpl implements PokemonDatasource {
  async read(id: string): Promise<PokemonModel> {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemone = await response.json();

      return Promise.resolve(PokemonModel.fromJSON(pokemone));
    } catch (error) {
      // Precisa criar uma classe de erro generica e então executar o throw
      // Exemplo em: /src/services/user/data/datasources/user.datasource.impl.ts
      return Promise.reject(error);
    }
  }
}
