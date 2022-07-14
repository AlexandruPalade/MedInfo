import { Component, OnInit } from "@angular/core";
import { WatchService } from "src/app/core/watch.service";
import { WatchData } from "src/app/models/watchData.model";

@Component({
  selector: "app-geofance",
  templateUrl: "./geofance.component.html",
  styleUrls: ["./geofance.component.css"]
})
export class GeofanceComponent implements OnInit {
  allWatchData: WatchData[] = [];
  watchData!: WatchData;
  latitude = 0;
  longitude = 0;

  constructor(private watchService: WatchService) {
    this.watchService.getData().subscribe((data: any) => {
      console.log(data);
      this.allWatchData = data;
      this.watchData = this.allWatchData[0];

      console.log(this.watchData.latitude, this.watchData.latitude);

      this.longitude = this.watchData.longitude;
      this.latitude = this.watchData.latitude;
    });
  }

  ngOnInit(): void {}
}
