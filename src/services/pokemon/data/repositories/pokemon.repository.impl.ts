import { PokemonRepository } from "../../domain/repositories/pokemon.repository";
import { PokemonDatasource } from "../datasources/pokemon.datasource";
import { PokemonModel } from "../models/pokemon.model";

export class PokemonRepositoryImpl implements PokemonRepository{
  constructor (private datasource: PokemonDatasource) {}

  read(id: string): Promise<PokemonModel>{
    return this.datasource.read(id);
  }
}