import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService{
        ingredientChanged = new EventEmitter<Ingredient[]>();
        ingredientAdded = new EventEmitter<Ingredient[]>();
        private ingredients: Ingredient[] =[
        new Ingredient('Rice',2),
        new Ingredient('Onion',4),
      ];

    getIngredient(){
        return this.ingredients.slice();
    }

    addItem(ing: Ingredient){
        this.ingredients.push(new Ingredient(ing.name,ing.amount));
        this.ingredientChanged.emit(this.ingredients.slice());    
    }

    addRecipe(ing: Ingredient[]){

        this.ingredients.push(...ing);

        this.ingredientChanged.emit(this.ingredients.slice());

    }
}