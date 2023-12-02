import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: Http) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripsUrl = `${this.apiBaseUrl}trips/`;

  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    return this.http
      .post(this.tripsUrl, formData)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripsUrl)
      .toPromise()
      .then(response => response.json() as Trip)
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
    .get(this.tripsUrl + tripCode)
    .toPromise()
    .then(response => response.json() as Trip)
    .catch(this.handleError);
   }
   

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDatService#updateTrip');
    console.log(formData);
    return this.http
      .put(this.tripsUrl + formData.code, formData)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}