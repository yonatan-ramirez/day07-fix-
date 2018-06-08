import { Component, OnInit } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';
module Vehicle{
  // you put export so the name Sedan is allowed outside the "house"
  export class Sedan{
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number){
      // this.make is from the top in the clas of sedan and the = make is from the constructor make
      this.make = make;
      this.model = model;
      this.year = year;
    }
  }
// its just inhere doing nothing it has to be in the app component to be noticed
  // const honda = new Sedan('Honda','Civic', 2018);
  // but to export it you have to put export infront
  export const honda = new Sedan('Honda','Civic', 2018);

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
// you can't put just Sedan, it will give an error, you have to call it from inside, its "house" which is module Vehicle. So its Vehicle.Sedan
  ford = new Vehicle.Sedan('Ford', 'Focus', 2013);
  chevy = new Vehicle.Sedan('Chevy', 'Impala', 2012);

  // honda is exported yet it still need to indentifiy its self long with the two other makers (ford and chevy)
  honda = {make:'Honda', model:'civic',year: 2007};
  // to make it shorter than Vehicle.honda.make it will be easier to shortten Vehicle.honda so hon will be the new variablefor Vehicle.honda
  hon = Vehicle.honda;

  ngOnInit(){
    console.log(this.ford);
    // console.log(this.honda);
  }
}
