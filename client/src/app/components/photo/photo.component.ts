import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment'
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  key = environment.API_KEY;

  @Input()
  photo_ref = ""

  flag: boolean = true
  url: string = ""
  ngOnInit() {
    this.url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${this.photo_ref}&key=${this.key}`
  //this.flag=false
  }
  resize() {
    this.flag = !this.flag

  }
}
