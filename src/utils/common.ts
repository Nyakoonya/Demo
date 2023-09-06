export class AuthError {
  message: string;
  status: number;
  constructor(error: any) {
    this.message = error.message;
    this.status = error.status;
  }

}
