import { PokemonModel } from "../models/pokemon.model";
import { PokemonDatasource } from "./pokemon.datasource";

export class PokemonDatasourceImpl implements PokemonDatasource{
  async read(id: string): Promise<PokemonModel> {
    return Promise.resolve(
      PokemonModel.fromJSON(
        JSON.stringify({
          id: 1,
          name: 'bulbasaur',
          sprites: {
            front_default: 'sei la'
          },
          types: [
            {
              name: 'pinto',
              url: 'pintomaior'
            }
          ]
        })
      )
    )
  }}