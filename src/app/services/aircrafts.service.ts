import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AirCraft } from '../models/aircraft.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AircraftsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllAirCrafts(searchTerm: string): Observable<AirCraft[]> {
    return this.http.get<AirCraft[]>(this.baseApiUrl + '/api/AirCraft?searchTerm=' + searchTerm);
  }

  addNewAirCraft(airCraft: AirCraft) : Observable<AirCraft>  {
    return this.http.post<AirCraft>(this.baseApiUrl + '/api/AirCraft', airCraft);
  }

  getAirCraftById(id: number) : Observable<AirCraft> {
    return this.http.get<AirCraft>(this.baseApiUrl + '/api/AirCraft/' + id);
  }

  deleteAirCraft(id: number) : Observable<AirCraft> {
    return this.http.delete<AirCraft>(this.baseApiUrl + '/api/AirCraft/' + id);
  }
}
