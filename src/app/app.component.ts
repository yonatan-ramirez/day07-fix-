import { Component } from '@angular/core';
// class CarBrand{
//   make= "Ford";
//   year= "1992";
//   model= "Ranger";
//   color= "white";
  
// }

// console.log(CarBrand);
let car1 = 'Ford';
let car2 = 'Dodge';
let car3 = 'Chevy';

class CarBrand{
  protected make:string;
  constructor(make: string){
    console.log(this.make);
    this.make = make;

  }
}
// extends allows the new class to use the other classes strings
class Car extends CarBrand{

  constructor(public make: string, public model: string, public year:number){

    super(make);
  }
  getDetails(){
    return(this.make, this.model, this.year);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ford: CarBrand= new CarBrand('ford');
  dodge: CarBrand = new CarBrand('dodge');
  chevy: Car = new Car ('chevy','impala',2012);
}
