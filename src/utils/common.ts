export class AuthError extends Error {
  message: string;
  status: number;
  constructor(error: any) {
    super(error.msg);
    this.message = error.msg;
    this.status = error.code;
  }

}
