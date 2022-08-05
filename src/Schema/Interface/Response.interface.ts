import { StatusCodeEnum } from "../Enum/StatusCode.enum";

export interface ResponseInterface {
  success: boolean;
  data: Message | Data;
  status_code: StatusCodeEnum;
}

interface Message {
  mensagem: String;
}

interface Data {
  data: any;
}
