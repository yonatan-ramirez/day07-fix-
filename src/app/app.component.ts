import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

fighter1= {name: 'Jack', power: 54};
fighter2={name:'Eric', power:56};

ngOnInit(){

}
}

