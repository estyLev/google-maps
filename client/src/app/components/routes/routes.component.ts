import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from 'src/app/classes/place';
import { MatDialog } from '@angular/material/dialog';
import { LocationComponent } from '../location/location.component';
import { Address } from 'ngx-google-places-autocomplete/objects/address';


@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent {
name: string="";
destination= {
  lat:0,
  lng:0
}
options = {
  componentRestrictions: {
    country: ["iw"]
  }
}
origion = {
  lat:0,
  lng:0
}
modes=["Driving","Walking","Bycicling","Transit"]
mode= google.maps.TravelMode.DRIVING ;
constructor(private router : ActivatedRoute, public dialog: MatDialog,) {}
ngOnInit(){
  this.router.params.subscribe(
    data=>{ 
    this.name=data['name']
    this.destination.lat=data['lat']
    this.destination.lng=data['lng']
   
    
    }
  )
}
onSelect(mode:string){
if(mode=="Walking")
this.mode=google.maps.TravelMode.WALKING
else if(mode=="Bycicling")
this.mode=google.maps.TravelMode.BICYCLING
else if(mode=="Transit")
this.mode=google.maps.TravelMode.TRANSIT
else this.mode=google.maps.TravelMode.DRIVING

}
openLocationDialog() {
  const dialogRef = this.dialog.open(LocationComponent);
  let instance = dialogRef.componentInstance;
  instance.center = this.origion;
  instance.destination=this.destination
  instance.travelMode=this.mode

}

changeOrigin(place:Address){
  this.origion.lat=place.geometry.location.lat()
  this.origion.lng=place.geometry.location.lng()

}
changeDestination(place:Address){
  this.destination.lat=place.geometry.location.lat()
  this.destination.lng=place.geometry.location.lng()

}
}

