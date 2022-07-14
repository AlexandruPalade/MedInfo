import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoggedInUser } from "src/app/models/loggedInUser.model";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent implements OnInit {
  username!: string | null;
  loggedInUser!: LoggedInUser | null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "");
    console.log(this.loggedInUser);
  }
  logout() {
    localStorage.clear();
    
  }
}
