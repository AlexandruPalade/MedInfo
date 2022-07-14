import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth.service";
import { UserService } from "src/app/core/user.service";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  loginForm!: FormGroup;
  users: User[] = [];

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {}

  async onLoginClick() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.signInUser(email, password);
  }
}
