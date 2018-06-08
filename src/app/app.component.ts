import { Component } from '@angular/core';

class User{
  constructor(public id:number, public name:string){

  }
}
class CarBrand{

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:`
  `,
  styleUrls: ['./app.component.css'],
  styles:[`
  h1{
    margin: auto;
    color: gray;
  }
  `]
})
export class AppComponent {
  title = 'app';
  displayParagraph:boolean = true;

  unknown: undefined;
  person: string= 'john';
  num: number =7;
  stop: boolean= false;
  people: any;
}
