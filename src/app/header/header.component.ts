import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectTab = new EventEmitter<number>();

  collapsed = true;


  recipeSelected(){
    this.selectTab.emit(1)
  }

  shoppingSelected(){
    this.selectTab.emit(2)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
