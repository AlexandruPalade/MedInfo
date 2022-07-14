interface IWatchDAta {
  _id: string;
  heartRate: string;
  bloodPressure: string;
  latitude: number;
  longitude: number;
}

export class WatchData implements IWatchDAta {
  _id = "";
  heartRate = "";
  bloodPressure = "";
  latitude = 0;
  longitude = 0;
}
