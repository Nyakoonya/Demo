export class AuthError {
  message: string;
  status: number;
  constructor(error: any) {
    this.message = error.msg;
    this.status = error.code;
  }

}
