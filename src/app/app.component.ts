import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Valid:boolean = true;

returnNum(num: number){

  if(num === 1){
    return this.Valid = true;
    console.log(num);
  }else if(num ===2){
    return this.Valid = false;
  }

 }
}
