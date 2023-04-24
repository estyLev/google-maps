import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../classes/place';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  placesList: Array<Place> = [];
  token: string | null | undefined;
  headers: any;
  constructor(private http: HttpClient, private router:Router) { }

  getPlacesByText(text: string): Observable<Array<Place>> {

    this.token = sessionStorage.getItem("token");
    
    if (!this.token){
      alert("New user? please subscribe");
      this.router.navigate(['/register'])
    }
      
    else
      this.token = JSON.parse(this.token);
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.http.get<Array<Place>>(environment.URL + "places/" + text, { 'headers': this.headers });
  }

  getPopularSearch(): Observable<string> {
    this.token = sessionStorage.getItem("token");
    if (!this.token){
      alert("New user? please subscribe");
    }
      
    else
      this.token = JSON.parse(this.token);
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
    return this.http.get<string>(environment.URL + "places", { 'headers': this.headers });
  }
}
