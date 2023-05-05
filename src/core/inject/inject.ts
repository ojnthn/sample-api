import { PokemonController } from "../../services/pokemon/controllers/pokemon.controller";
import { PokemonInject } from "../../services/pokemon/core/pokemon.inject";
import { UserController } from "../../services/user/controllers/user.controller";
import { UserInject } from "../../services/user/core/user.inject";

const userController: UserController = new UserInject().getUserController();

const pokemonController: PokemonController = new PokemonInject().getPokemonController();

export { userController, pokemonController };
