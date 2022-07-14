import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WatchService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(`/api/watch-data/getData`);
  }
}
