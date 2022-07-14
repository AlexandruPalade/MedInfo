import { Component, OnInit } from "@angular/core";
import { WatchService } from "src/app/core/watch.service";
import { WatchData } from "src/app/models/watchData.model";

export interface BloodPressure {
  category: string;
  systolic: string;
  diastolic: string;
  management: string;
}

const ELEMENT_DATA: BloodPressure[] = [
  {
    category:"Normal",
    systolic:"120 or less",
    diastolic:"80 or less",
    management:"N/A"
  },

  {
    category:"Elevated",
    systolic:"120-129",
    diastolic:"80 or less",
    management:"People with elevated blood pressure are at risk of high blood pressure unless steps are taken to control it"
  },
  {
    category:"Hypertension stage I",
    systolic:"130-139",
    diastolic:"80-89",
    management:"Doctors may prescribe blood pressure medications and some lifestyle changes to reduce the risk of heart diseases and stroke."
  },
  {
    category:"Hypertension stage II",
    systolic:"140-159	",
    diastolic:"90-99",
    management:"Doctors may prescribe a combination of both medications and lifestyle changes."
  },
  {
    category:"Hypertensive crisis",
    systolic:"180 or higher",
    diastolic:"120 or higher",
    management:"This is the most critical condition and requires emergency medical attention."
  },
];

@Component({
  selector: "app-blood-pressure",
  templateUrl: "./blood-pressure.component.html",
  styleUrls: ["./blood-pressure.component.css"]
})
export class BloodPressureComponent implements OnInit {
  displayedColumns: string[] = ["category", "systolic","diastolic","management"];
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
