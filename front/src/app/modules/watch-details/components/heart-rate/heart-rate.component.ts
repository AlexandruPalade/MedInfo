import { Component, OnInit } from "@angular/core";
import { WatchData } from "src/app/models/watchData.model";
import { WatchService } from "src/app/core/watch.service";

export interface HeartRateByAge {
  position: number;
  age: string;
  target: string;
  maximum: string;
}

const ELEMENT_DATA: HeartRateByAge[] = [
  {
    position: 1,
    age: "20 years",
    target: "100 to 170",
    maximum: "200"
  },
  {
    position: 2,
    age: "30 years",
    target: "95 to 162",
    maximum: "190"
  },
  {
    position: 3,
    age: "35 years",
    target: "93 to 157",
    maximum: "185"
  },
  {
    position: 4,
    age: "40 years",
    target: "90 to 153",
    maximum: "180"
  },

  {
    position: 5,
    age: "50 years",
    target: "85 to 145",
    maximum: "170"
  },
  {
    position: 6,
    age: "60 years",
    target: "80 to 136",
    maximum: "160"
  },
  {
    position: 7,
    age: "70+ years",
    target: "75 to 128",
    maximum: "150"
  }
];

@Component({
  selector: "app-heart-rate",
  templateUrl: "./heart-rate.component.html",
  styleUrls: ["./heart-rate.component.css"]
})
export class HeartRateComponent implements OnInit {
  displayedColumns: string[] = ["position", "age", "target", "maximum"];
  dataSource = ELEMENT_DATA;

  allWatchData: WatchData[] = [];
  watchData!: WatchData;

  constructor(private watchService: WatchService) {}

  ngOnInit() {
    this.watchService.getData().subscribe((data: any) => {
      console.log(data);
      this.allWatchData = data;
      this.watchData = this.allWatchData[0];
    });
  }
}
