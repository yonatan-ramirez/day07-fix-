import { Component, OnInit } from '@angular/core';

interface fighter{
  name: string;
  number1?: number;
returnNum?():any;
  
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
fighter1: fighter= {name:"Mike", number1: 10};
fighter2: fighter = {name:'goku', returnNum: () => {console.log(34)}};
// fighter1= {name: 'Jack', power: 54};
// fighter2={name:'Eric', power:56};

ngOnInit(){
console.log(this.fighter1, this.fighter2, this.fighter2.returnNum);
}
}

