import { UserModel } from "../data/models/user.model";
import { CreateUserUsecase } from "../domain/usecases/create_user/create_user.usecase";
import { Request, Response } from "express";
import { ReadUserUsecase } from "../domain/usecases/read_user/read_user.usecase";
import { Failure } from "../../../core/errors/failure";
import { DeleteUserUsecase } from "../domain/usecases/delete_user/delete_user.usecase";
import { UpdateUserUsecase } from "../domain/usecases/update_user/update_user.usercase";
import { ListUserUsecase } from "../domain/usecases/list_user/list_user.usercase";

import { FindByUserEmailUsecase } from "../domain/usecases/find_by_user_email/find_by_user_email.usecase";
import { ValidateUserUsecase } from "../domain/usecases/validate_user/validate_user.usecase";

export class UserController {
  constructor(
    private create: CreateUserUsecase,
    private read: ReadUserUsecase,
    private remove: DeleteUserUsecase,
    private update: UpdateUserUsecase,
    private list: ListUserUsecase,
    private findByEmail: FindByUserEmailUsecase,
    private validate: ValidateUserUsecase
  ) {}

  async createUser(req: Request, res: Response) {
    const user = UserModel.fromJSON(JSON.stringify(req.body));

    /**
     * @todo Está parte de validação de dados poderia ser feita atráves de uma lib/package de validação
     * validando o tipo de dado e se é obrigatório ou não.
     * Eu gostaria que você fizesse na mão mesmo pra exercitar a tua lógica e pra tu ver como funciona
     * mas se tu quiser usar uma lib/package de validação, fique a vontade.
     *
     * Futuramente está validação será removida daqui e passada para um middleware, mas não
     * se preocupe com isso agora.
     *
     * A mesma coisa deverá ser implementada em outros metodos dessa classe.
     */
    if (!user.name) {
      return res
        .status(400)
        .json({ Error: "O nome do usuário é obrigatório." });
    }

    /**
     * Explicando o por que da remoção da validação do usuario daqui:
     * sempre deve deixar o mais quebrado possível, e funções devem ter responsabilidades unicas,
     * e regras de negócio não devem ficar aqui, futuramente pode haver mais validações de usuário
     * como idade do usuário ou validação do telefone dele, e isso não deve ficar aqui, deve ficar
     * em um lugar especifico para isso, dai que entra o usecase de validação de usuário.
     *
     * Usecases são responsaveis por implementar regras de negócio, e não o controller.
     *
     * A mesma coisa deverá ser implementada em outros metodos dessa classe.
     */
    const validUser = await this.validate.execute(user);

    if (validUser) {
      return res.status(400).json({ error: "O e-mail já está em uso." });
    }

    const response = await this.create.execute(
      UserModel.fromJSON(JSON.stringify(req.body))
    );

    if (response instanceof Failure) {
      return res.status(400).json({ message: response.message });
    }

    res.status(201).json({ userId: response });
  }

  async readUser(req: Request, res: Response) {
    const userId = req.params.id;
    const user = await this.read.execute(parseInt(userId));

    if (user instanceof Failure) {
      return res.status(400).json({ message: user.message });
    }

    res.status(200).json(user.toJSON());
  }

  async deleteUser(req: Request, res: Response) {
    const userId = req.params.id;
    const response = await this.remove.execute(parseInt(userId));

    if (response instanceof Failure) {
      return res.status(400).json({ message: response.message });
    }

    res.status(200).json({ message: "Usuário deletado com sucesso." });
  }

  async updateUser(req: Request, res: Response) {
    const user = UserModel.fromJSON(JSON.stringify(req.body));
    const userId = parseInt(req.params.id);

    if (user.email) {
      const contactByEmail = await this.findByEmail.execute(user.email);

      if (contactByEmail && contactByEmail.id !== userId) {
        return res.status(400).json({ error: "O e-mail já está em uso." });
      }
    }

    const response = await this.update.execute(parseInt(req.params.id), user);

    if (response instanceof Failure) {
      return res.status(400).json({ message: response.message });
    }
    res.status(200).json({ message: "Usuário atualizado com sucesso." });
  }

  async listUser(req: Request, res: Response) {
    const users = await this.list.execute();

    if (users instanceof Failure) {
      return res.status(400).json({ message: users.message });
    }

    res.status(200).json(users);
  }
}
