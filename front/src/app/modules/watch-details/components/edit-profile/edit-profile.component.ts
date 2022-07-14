import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth.service";
import { UserService } from "src/app/core/user.service";
import { LoggedInUser, UpdatedUser } from "src/app/models/loggedInUser.model";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"]
})
export class EditProfileComponent implements OnInit {
  editForm: FormGroup;
  loggedInUser!: LoggedInUser | null;
  updatedUser!: User | null;

  constructor(private userService: UserService, private router: Router) {
    this.editForm = new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),

      username: new FormControl(null, [Validators.minLength(5)]),
      age: new FormControl(null, [Validators.min(16)])
    });
  }

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "");
    console.log(this.loggedInUser);
    if (this.loggedInUser) {
      this.editForm.patchValue({
        email: this.loggedInUser.email,
        username: this.loggedInUser.username,
        age: this.loggedInUser.age
      });
    }
  }

  editProfile() {
    this.updatedUser = {
      _id: this.loggedInUser!._id,
      email: this.editForm.value.email,
      username: this.editForm.value.username,
      age: this.editForm.value.age,
      firstname: "",
      lastname: "",
      password: ""
    };
    console.log(this.updatedUser);
    this.userService
      .editUser(this.updatedUser._id, this.updatedUser)
      .subscribe(() => {
        this.loggedInUser = {
          _id: this.loggedInUser!._id,
          email: this.updatedUser!.email,
          username: this.updatedUser!.username,
          age: this.updatedUser!.age
        };

        localStorage.setItem("loggedInUser", JSON.stringify(this.loggedInUser));
        this.router.navigate(["watch-details/pages/home"]);
      });
  }

  cancelEdit() {
    this.router.navigate(["watch-details/pages/home"]);
  }
}
