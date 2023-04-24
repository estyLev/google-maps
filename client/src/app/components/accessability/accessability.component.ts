import { Component } from '@angular/core';


@Component({
  selector: 'app-accessability',
  templateUrl: './accessability.component.html',
  styleUrls: ['./accessability.component.css']
})
export class AccessabilityComponent {
  ngOnInit(){
    
  }
   resize() : any {
    // return the global native browser window object
    // let a=window.document.body.children;
    //  for (let i = 0;  i< a.length; i++) {
    //   const element = <HTMLElement>a[i];
    //   element.style.fontSize='10px'
      
    // };
   let elements= document.querySelectorAll('.container')
   for (let i = 0; i < elements.length; i++) {
    const element = <HTMLElement>elements[i];
    element.style.fontSize='100px'
   }
 }
 
  
}
