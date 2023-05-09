import { ReadPokemonUsecase } from "../domain/usecases/read_pokemon/read_pokemon.usecase";
import { Request, Response } from "express";

export class PokemonController {
  constructor(private read: ReadPokemonUsecase) {}

  async readPokemon(req: Request, res: Response) {
    const pokemonId = req.params.id;
    const pokemon = await this.read.execute(pokemonId);

    res.status(200).json({ pokemon });
  }
}
