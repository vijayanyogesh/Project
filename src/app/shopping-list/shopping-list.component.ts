import { Component, OnInit } from '@angular/core';

import{Ingredient} from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] =[
    new Ingredient('Rice',2),
    new Ingredient('Onion',4),
  ];

  addItem(ing: Ingredient){
    this.ingredients.push(new Ingredient(ing.name,ing.amount));

  }

  constructor() { }

  ngOnInit(): void {
  }

}
