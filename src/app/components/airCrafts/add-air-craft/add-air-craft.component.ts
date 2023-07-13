import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirCraft } from 'src/app/models/aircraft.model';
import { AircraftsService } from 'src/app/services/aircrafts.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-air-craft',
  templateUrl: './add-air-craft.component.html',
  styleUrls: ['./add-air-craft.component.css']
})
export class AddAirCraftComponent implements OnInit{

  selectedDate: FormControl = new FormControl();

  constructor(
    private airCraftService: AircraftsService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  id: number = 0;

  response: {dbPath: ''} = { dbPath: '' };

  newAirCraft: AirCraft = {
    id: 0,
    make: '',
    model: '',
    registration: '',
    location: '',
    date: new Date(),
    imageUrl: ''
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id) {
        this.airCraftService.getAirCraftById(this.id)
          .subscribe({
            next: (response) => {
              this.newAirCraft = response;
            }
          })
      }
    });
  }

  uploadFinished = (event: any) => { 
    this.response = event; 
  }

  handleDateChange(event: any) {
    debugger;
    this.selectedDate.setValue(event.value);
    this.newAirCraft.date = event.value;
  }

  addAirCraft() {
    debugger;
    this.newAirCraft.imageUrl = this.response.dbPath;
    this.airCraftService.addNewAirCraft(this.newAirCraft)
    .subscribe(
      {
        next: (employee) => {
          this.router.navigate(['aircrafts']);
        }
      }
    )
  }
}
