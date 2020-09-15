

import{Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>(); 

    private recipes: Recipe[] =[
        new Recipe('Biryani','Hyderabadi','https://static.toiimg.com/photo/53096628.cms',
        [new Ingredient('Chicken',20), new Ingredient('Mutton',20),new Ingredient('Rice',20)]
        ),
        new Recipe('Shawarma','Arabian','https://www.recipetineats.com/wp-content/uploads/2014/12/Chicken-Shawarma_5.jpg',
        [new Ingredient('Chicken',10), new Ingredient('Mutton',2),new Ingredient('Rolls',2)]
        )
    ];

    public recipeSelected2:Recipe;


    getRecipes(){
        return this.recipes;
    }

    displayRecipes(num:number){
        return this.recipes[num];
    }

    addRecipe(rep:Recipe){
        this.recipes.push(rep);

    }

    editRecipe(id:number,newRep:Recipe){
        this.recipes[id] = newRep;

    }

    deleteRecipe(id:number){
        this.recipes.splice(id,1);
    }
}