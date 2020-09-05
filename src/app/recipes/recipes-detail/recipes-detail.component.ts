import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipeDisplay: Recipe;

  // recipeDisplay:Recipe;

  addToList(ingredient : Ingredient[]){

    this.shoppingService.addRecipe(ingredient);
    //console.log(ingredient);
    
  }

  constructor(private shoppingService: ShoppingService, private recipeService: RecipeService) { }

  ngOnInit(): void {
    
  }

}
