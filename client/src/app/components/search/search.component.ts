import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Place } from 'src/app/classes/place';
import { PlaceService } from 'src/app/services/place-service.service';
import { LocationComponent } from '../location/location.component';
import { PhotoComponent } from '../photo/photo.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private placeService: PlaceService,
    public dialog: MatDialog,
    public router: Router) { }

  @ViewChild('table')
  table: ElementRef | undefined;

  popularSearch: string = "";
  displayedColumns: string[] = ['name', 'address', 'Location', 'photo', 'routes'];
  places: Array<Place> = [];
  options = {
    componentRestrictions: {
      country: ["iw"]
    }
  }
  potition = {
    lat: 0,
    lng: 0
  }
  photo_ref = ""
  searchPlaces(text: string) {
    this.table?.nativeElement.setAttribute('display', 'block');

    this.placeService.getPlacesByText(text).subscribe(
      data => {
        this.places = data;
        console.log(data);
        this.table?.nativeElement.style.setProperty('display', "block");
        this.getPopularSearh()
      },
      err => { console.log(err); }
    )

  }

  getPopularSearh() {
    this.placeService.getPopularSearch().subscribe(
      data => { this.popularSearch = data }
    )
  }

  changePotition(element: Place) {
    this.potition = element.location;
    this.openLocationDialog()
  }

  changePhotoRef(element: Place) {
    if (element.photos.photo_reference) {
      this.photo_ref = element.photos.photo_reference;
      this.openPhotoDialog()
    }
  }
  openLocationDialog() {
    const dialogRef = this.dialog.open(LocationComponent);
    let instance = dialogRef.componentInstance;
    instance.center = this.potition

  }
  openPhotoDialog() {
    const dialogRef = this.dialog.open(PhotoComponent);
    let instance = dialogRef.componentInstance;
    instance.photo_ref = this.photo_ref

  }
  routes(place: Place) {
    this.router.navigate(['routes', {
      name: place.name,
    
      lat: place.location.lat, lng: place.location.lng
    }])
  }
}
