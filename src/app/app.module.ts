import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirCraftsListComponent } from './components/airCrafts/air-crafts-list/air-crafts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAirCraftComponent } from './components/airCrafts/add-air-craft/add-air-craft.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadComponent } from './components/files/upload/upload.component';
import { ViewAirCraftComponent } from './components/airCrafts/view-air-craft/view-air-craft.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    AirCraftsListComponent,
    AddAirCraftComponent,
    UploadComponent,
    ViewAirCraftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
