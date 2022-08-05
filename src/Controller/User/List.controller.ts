import { BaseController } from "../Base.controller";
import { Request, Response } from "express";
import { ResponseInterface } from "../../Schema/Interface/Response.interface";
import { UserUsecase } from "../../UseCase/User.usecase";
import { UserEntitie } from "../../Schema/Entitie/User.entitie";
import { StatusCodeEnum } from "../../Schema/Enum/StatusCode.enum";

export class ListController extends BaseController {
  constructor(request: Request, response: Response) {
    super(request, response);
  }

  handle(): ResponseInterface {
    const use_case: UserUsecase = new UserUsecase();

    let success: boolean = true;
    let status_code: StatusCodeEnum = StatusCodeEnum.success;
    let list: UserEntitie[] = [];

    list = use_case.list();

    return this.return(
      success,
      {
        data: list,
      },
      status_code
    );
  }
}
