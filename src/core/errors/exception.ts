export class Exception {
  message: string;
  name: string;

  constructor(message: string) {
    this.message = message;
    this.name = "Exception";
  }
}
