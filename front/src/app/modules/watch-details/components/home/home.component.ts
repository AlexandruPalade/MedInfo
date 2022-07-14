import { Router } from "@angular/router";
import { UserService } from "src/app/core/user.service";

import { Component, OnInit } from "@angular/core";
import { WatchService } from "src/app/core/watch.service";
import { WatchData } from "src/app/models/watchData.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
