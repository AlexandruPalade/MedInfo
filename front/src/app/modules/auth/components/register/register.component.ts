import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&.])[A-Za-zd$@$!%*?&].{8,}"
        ),
        Validators.minLength(8)
      ]),
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      firstname: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      age: new FormControl(null, [Validators.required, Validators.min(16)])
    });
  }

  async onRegisterClick() {
    const { email, password, username, firstname, lastname, age } =
      this.registerForm.value;

    this.authService.signUpUser(
      email,
      password,
      username,
      lastname,
      firstname,
      age
    );
    this.router.navigate(["/auth/login"]);
  }

  getErrorMessageEmail() {
    if (this.registerForm?.hasError("required")) {
      return "This field is required";
    }
    return this.registerForm?.hasError("pattern")
      ? ""
      : "Pattern for email not respected";
  }

  getErrorMessagePassword() {
    if (this.registerForm?.hasError("required")) {
      return "This field is required";
    }
    return this.registerForm?.hasError("pattern")
      ? ""
      : "Uppercase,lowercase,1 number ,1 sepecial character,min length 6";
  }

  getErrorMessage() {
    if (this.registerForm?.hasError("required")) {
      return "This field is required";
    }
    return this.registerForm?.hasError("minLength")
      ? ""
      : "At least 2 characters";
  }
  getErrorMessageAge() {
    if (this.registerForm?.hasError("required")) {
      return "This field is required";
    }
    return this.registerForm?.hasError("min") ? "" : "At least 16 years old";
  }
}
