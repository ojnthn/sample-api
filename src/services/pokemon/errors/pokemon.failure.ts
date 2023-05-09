import { Failure } from "../../../core/errors/failure";

export class PokemonFailure extends Failure {
  constructor(message: string) {
    super(message);
  }
}
