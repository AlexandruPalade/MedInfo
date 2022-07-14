import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";
import { LoggedInUser, UpdatedUser } from "../models/loggedInUser.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loginUrl = "api/users/login/";
  private registerUrl = "api/users/register/";
  private updateUrl = "api/users/update/:id";

  loggedInUser!: LoggedInUser;
  updatedUser!: UpdatedUser;

  constructor(private httpClient: HttpClient, private router: Router) {}

  registerAuth(
    email: string,
    password: string,
    username: string,
    firstname: string,
    lastname: string,
    age: string
  ) {
    this.httpClient
      .post(this.registerUrl, {
        email,
        password,
        username,
        firstname,
        lastname,
        age
      })
      .pipe(catchError(this.handleAuthErrors))
      .subscribe(
        (data) => {
          return data;
        },
        (error) => {
          return error;
        }
      );
  }

  //REGISTER
  signUpUser(
    email: string,
    password: string,
    username: string,
    firstname: string,
    lastname: string,
    age: string
  ) {
    this.registerAuth(email, password, username, firstname, lastname, age);
  }

  //LOGIN
  signInUser(email: string, password: string) {
    this.loginAuth(email, password);
  }

  loginAuth(email: string, password: string) {
    this.httpClient
      .post(this.loginUrl, {
        email,
        password
      })
      .subscribe((data: any) => {
        if (data.token !== null) {
          this.loggedInUser = {
            _id: data.foundUser._id,
            email: data.foundUser.email,
            username: data.foundUser.username,
            age: data.foundUser.age
          };

          console.log(
            "?????",
            data.foundUser.firstName,
            data.foundUser.lastName
          );
          localStorage.setItem("token", data.token);
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify(this.loggedInUser)
          );
          this.router.navigate(["watch-details/pages/home"]);
        }
      });
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");

    if (token === null || token === "") {
      return false;
    } else {
      return true;
    }
  }

  handleAuthErrors(authError: HttpErrorResponse) {
    const errorMessage = authError.error;
    console.log(errorMessage);

    return throwError({ errorMessage });
  }
}
