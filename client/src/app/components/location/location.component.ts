import { Component,Input,ViewChild  } from '@angular/core';
import { MapDirectionsRenderer, MapInfoWindow, MapMarker } from '@angular/google-maps';
import {MapDirectionsService} from '@angular/google-maps';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
   directionsResults$!: google.maps.DirectionsResult | undefined;
  mapDirectionsRander = new google.maps.DirectionsRenderer

  constructor(private mapDirectionsService: MapDirectionsService) {
    
  }

    ngOnInit(): void {
      const request: google.maps.DirectionsRequest = {
      destination: this.destination,
      origin: this.center,
      travelMode: this.travelMode
    };
    //this.mapDirectionsRander=(document.getElementById('direction'))
   // this.directionsResults$ = this.mapDirectionsService.route(request).pipe(map(response => response.result ));
    this.mapDirectionsService.route(request).subscribe(data=>{
      console.log(data)
      this.directionsResults$=data.result
      //this.mapDirectionsRander!.setPanel(document.getElementById('directionsList'))
    });

    
   
    

  }
    display: any;

    @Input()
    center: google.maps.LatLngLiteral = {
      lat: 0,
      lng: 0
    };
    @Input()
    destination: google.maps.LatLngLiteral = {
      lat: 0,
      lng: 0
    };
    @Input()
    travelMode!:google.maps.TravelMode

    zoom = 15;
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }

    markerOptions: google.maps.MarkerOptions = {
      icon : '../../../assets/icons8-google-maps-48.png',
      draggable: false
  };

  
}





