import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeartRateComponent } from "./components/heart-rate/heart-rate.component";
import { HomeComponent } from "./components/home/home.component";

import { WAtchDetailsRoutingModule } from "./watch-details-routing.module";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { GeofanceComponent } from "./components/geofance/geofance.component";
import { EditProfileComponent } from "./components/edit-profile/edit-profile.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BloodPressureComponent } from "./components/blood-pressure/blood-pressure.component";
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    HeartRateComponent,
    HomeComponent,
    LandingPageComponent,
    NavigationComponent,
    GeofanceComponent,
    EditProfileComponent,
    BloodPressureComponent
  ],
  imports: [
    CommonModule,
    WAtchDetailsRoutingModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCT03W_4jBN_Pcq35QSN4xUiBDOYLzZIfQ"
    })
  ]
})
export class WatchDetails {}
