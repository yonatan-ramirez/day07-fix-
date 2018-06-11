import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  displayParagraph: boolean = true;


  arr = [1,2,3, 'str'];
  users=[{
    name: 'Jack',
    age: 30,
  },{
    name:'Jill',
    age: 43,
  },{
    name: 'james',
    age: 21,
  }];

}

