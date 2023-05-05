import { PokemonController } from "../controllers/pokemon.controller";
import { PokemonDatasource } from "../data/datasources/pokemon.datasource";
import { PokemonDatasourceImpl } from "../data/datasources/pokemon.datasource.impl";
import { PokemonRepositoryImpl } from "../data/repositories/pokemon.repository.impl";
import { PokemonRepository } from "../domain/repositories/pokemon.repository";
import { ReadPokemonUsecaseImpl } from "../domain/usecases/read_pokemon/read_pokemon.usecase.impl";

export class PokemonInject{
  private pokemonController: PokemonController;

  constructor(){
    const pokemonDatasource: PokemonDatasource = new PokemonDatasourceImpl();

    const pokemonRepository: PokemonRepository = new PokemonRepositoryImpl(
      pokemonDatasource
    );

    this.pokemonController = new PokemonController(
      new ReadPokemonUsecaseImpl(pokemonRepository)
    )
  }

  getPokemonController(): PokemonController {
    return this.pokemonController;
  }
}