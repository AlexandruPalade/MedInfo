import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UpdatedUser } from "../models/loggedInUser.model";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    return this.httpClient.get(`api/users`);
  }

  loginUser(userToLoggIn: User) {
    return this.httpClient.post("api/users/login", userToLoggIn);
  }

  createNewUser(user: User) {
    return this.httpClient.post(`api/users/register`, user);
  }

  editUser(id: string, updatedUser: User) {
    console.log(id);
    return this.httpClient.put(`api/users/update/${id}`, updatedUser);
  }
}
