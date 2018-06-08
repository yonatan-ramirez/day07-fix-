import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  any:any;
  str: string = 'sharks are awesome!';
  num: number = 5;
  space: void;

  chad: null;

  arr: any[] = [4 , 'hello world', true, false];
  arrTwo:number[]= [4,6];
  arrThree: Array<number> =[4,5];
  arrFour:string[] = ['hola', 'mundo'];
  arrFive: Array<string> = ['das', 'Verdania'];
}
