import { Component } from '@angular/core';
class CarBrand{
  make= "Ford";
  year= "1992";
  model= "Ranger";
  color= "white";
  
}
console.log(CarBrand);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
