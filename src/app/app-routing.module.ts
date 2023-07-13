import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirCraftsListComponent } from './components/airCrafts/air-crafts-list/air-crafts-list.component';
import { AddAirCraftComponent } from './components/airCrafts/add-air-craft/add-air-craft.component';
import { ViewAirCraftComponent } from './components/airCrafts/view-air-craft/view-air-craft.component';

const routes: Routes = [
  {
    path: '',
    component: AirCraftsListComponent
  },
  {
    path: 'aircrafts',
    component: AirCraftsListComponent
  },
  {
    path: 'aircrafts/add',
    component: AddAirCraftComponent
  },
  {
    path: 'aircrafts/edit/:id',
    component: AddAirCraftComponent
  },
  {
    path: 'aircrafts/view/:id',
    component: ViewAirCraftComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
