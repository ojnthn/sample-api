import { PokemonModel } from "../models/pokemon.model";
import { PokemonDatasource } from "./pokemon.datasource";

export class PokemonDatasourceImpl implements PokemonDatasource {
  async read(id: string): Promise<PokemonModel> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemone = await response.json();
    const types = pokemone.types.map((type: object) => type);

    return Promise.resolve(
      PokemonModel.fromJSON(
        JSON.stringify({
          id: id,
          name: pokemone.forms[0].name,
          sprites: {
            front_default: pokemone.sprites.front_default,
          },
          types: [
            {
              name: pokemone.types[0].type.name,
              url: pokemone.types[0].type.url,
            },
          ],
        })
      )
    );
  }
}
