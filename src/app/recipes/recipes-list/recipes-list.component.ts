import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import{Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeToOuter = new EventEmitter <Recipe>();

  recipes: Recipe[] =[
    new Recipe('test','test','https://static.toiimg.com/photo/53096628.cms'),
    new Recipe('test2','test2','https://static.toiimg.com/photo/53096628.cms')
  ];

  sendRec(recipe:Recipe){

    this.recipeToOuter.emit(recipe);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
