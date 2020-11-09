import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FilterComponent } from './components/filter/filter.component';
import { LaunchResultsComponent } from './components/launch-results/launch-results.component';
import { FlightComponent } from './components/flight/flight.component';
import { LaunchDataService } from './services/launch-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilterComponent,
    LaunchResultsComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LaunchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
