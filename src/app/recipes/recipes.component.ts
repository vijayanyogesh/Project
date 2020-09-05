import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe : Recipe;

  constructor(private recipe: RecipeService) { }

  ngOnInit(): void {

    this.recipe.recipeSelected.subscribe(
      (recipe: Recipe)=>{
        this.selectedRecipe = recipe;
      }
    )
    
  }

  
}
