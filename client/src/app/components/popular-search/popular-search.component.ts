import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popular-search',
  templateUrl: './popular-search.component.html',
  styleUrls: ['./popular-search.component.css']
})
export class PopularSearchComponent {

  @Input()
  popular: string ="";

 
}
