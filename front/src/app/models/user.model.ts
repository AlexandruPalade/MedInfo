interface IUser {
  _id?: string;
  email: string;
  password?: string;
  username: string;
  firstname?: string;
  lastname?: string;
  age: string;
}

export class User implements IUser {
  _id = "";
  email = "";
  password = "";
  username = "";
  firstname = "";
  lastname = "";
  age = "";
  
  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
