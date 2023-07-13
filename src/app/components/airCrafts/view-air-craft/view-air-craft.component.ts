import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirCraft } from 'src/app/models/aircraft.model';
import { AircraftsService } from 'src/app/services/aircrafts.service';

@Component({
  selector: 'app-view-air-craft',
  templateUrl: './view-air-craft.component.html',
  styleUrls: ['./view-air-craft.component.css']
})
export class ViewAirCraftComponent implements OnInit{

  id: number = 0;

  airCraft: AirCraft = {
    id: 0,
    make: '',
    model: '',
    registration: '',
    location: '',
    date: new Date(),
    imageUrl: ''
  }

  constructor(private airCraftService: AircraftsService,
    private router: Router,
    private route: ActivatedRoute){

    }

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        if(this.id) {
          this.airCraftService.getAirCraftById(this.id)
            .subscribe({
              next: (response) => {
                this.airCraft = response;
              }
            })
        }
      });
    }

    public createImgPath = (serverPath: string) => { 
      return `http://localhost:5135/${serverPath}`; 
    }
}
