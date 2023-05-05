import { PokemonRepository } from "../../repositories/pokemon.repository";
import { ReadPokemonUsecase } from "./read_pokemon.usecase";

export class ReadPokemonUsecaseImpl implements ReadPokemonUsecase{
  constructor(
    private pokemonRepository: PokemonRepository
  ){}
  async execute(id: string){
    const pokemon = await this.pokemonRepository.read(id);
    return pokemon;
  }
}