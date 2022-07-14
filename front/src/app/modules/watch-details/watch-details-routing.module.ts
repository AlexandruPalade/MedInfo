import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BloodPressureComponent } from "./components/blood-pressure/blood-pressure.component";
import { EditProfileComponent } from "./components/edit-profile/edit-profile.component";
import { GeofanceComponent } from "./components/geofance/geofance.component";
import { HeartRateComponent } from "./components/heart-rate/heart-rate.component";
import { HomeComponent } from "./components/home/home.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";

const routes: Routes = [
  {
    path: "pages",
    component: LandingPageComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "heart-rate", component: HeartRateComponent },
      { path: "geofance", component: GeofanceComponent },
      { path: "blood-pressure", component: BloodPressureComponent },
      { path: "edit-profile", component: EditProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WAtchDetailsRoutingModule {}
