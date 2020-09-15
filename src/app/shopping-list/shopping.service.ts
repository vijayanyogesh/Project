import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingService{
        ingredientChanged = new EventEmitter<Ingredient[]>();
        // ingredientAdded = new EventEmitter<Ingredient[]>();
        startedEditing = new Subject<number>();
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

    getIngredientEdit(id:number){
        return this.ingredients[id];
    }

    updateIng(index:number, newIng:Ingredient){
        this.ingredients[index] = newIng;
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    deleteIng(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}