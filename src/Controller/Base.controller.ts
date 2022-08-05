import { Request, Response } from "express";

export class BaseController {
  public request: Request | undefined;
  public response: Response | undefined;
  public input;

  constructor(request?: Request, response?: Response) {
    Object.assign(this, {
      request,
      response,
    });

    if (this.request && this.request.body)
      Object.assign(this, {
        files: this.request.files ? this.request.files : [],
        input: this.request.body,
      });
  }

  return(success = false, data: object, status_code = 200) {
    if (this.response) {
      return this.response.status(status_code).json(
        Object.assign(
          {
            success,
          },
          data
        )
      );
    }
  }
}
