import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes: Recipe;
  @Output() sendRec = new EventEmitter <Recipe>();

  sendRecipe(){

    this.sendRec.emit(this.recipes);

  }

  constructor() { }

  ngOnInit(): void {
  }

}