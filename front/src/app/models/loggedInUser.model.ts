interface ILoggedInUser {
  _id?: string;
  email: string;
  username: string;
  age: string;
}

export class LoggedInUser implements ILoggedInUser {
  _id = "";
  email = "";
  username = "";
  age = "";
}

export class UpdatedUser implements ILoggedInUser {
  email = "";
  username = "";
  age = "";
}
