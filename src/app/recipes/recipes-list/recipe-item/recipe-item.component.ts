import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes: Recipe;

  sendRecipe(){

    this.recipeService.recipeSelected.emit(this.recipes);
    // this.reciperService.recipeSelected2 = this.recipes;
 
  }

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

}
