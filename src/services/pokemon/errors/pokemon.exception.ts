import { Exception } from "../../../core/errors/exception";

export class PokmemonException extends Exception {
  constructor(message: string) {
    super(message);
    this.name = "PokemonException";
  }
}
