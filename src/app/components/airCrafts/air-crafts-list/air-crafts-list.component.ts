import { Component, OnInit } from '@angular/core';
import { AirCraft } from 'src/app/models/aircraft.model';
import { AircraftsService } from 'src/app/services/aircrafts.service';

@Component({
  selector: 'app-air-crafts-list',
  templateUrl: './air-crafts-list.component.html',
  styleUrls: ['./air-crafts-list.component.css']
})
export class AirCraftsListComponent implements OnInit {
  
  airCrafts: AirCraft[] = [ ];
  searchTerm: string = '';

  constructor(private airCraftService: AircraftsService) {

  }

  ngOnInit() {
    this.getAirCrafts();
  }

  onSearch() {
    this.getAirCrafts();
  }

  getAirCrafts() {
    this.airCraftService.getAllAirCrafts(this.searchTerm)
    .subscribe({
      next: (airCrafts) => {
        this.airCrafts = airCrafts;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  deleteAirCraft(id: number) {
    this.airCraftService.deleteAirCraft(id)
      .subscribe({
        next: (response) => {
          this.getAirCrafts();
        }
      })
  }
}
