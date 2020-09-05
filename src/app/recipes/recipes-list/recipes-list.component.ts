import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import{Recipe} from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {


  recipes: Recipe[] =[];

  constructor(private recipe: RecipeService) { }

  ngOnInit(): void {

    this.recipes = this.recipe.getRecipes();
  }

}
