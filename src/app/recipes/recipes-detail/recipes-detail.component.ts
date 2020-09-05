import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipeDisplay: Recipe;
  // @Input() recipeDisplay: Recipe;

  // recipeDisplay:Recipe;

  id:number;

  addToList(ingredient : Ingredient[]){

    this.shoppingService.addRecipe(ingredient);
    //console.log(ingredient);
    
  }



  constructor(private shoppingService: ShoppingService, 
              private recipeService: RecipeService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.recipeDisplay = this.recipeService.displayRecipes(this.id);
      }
    )
  }

  onEditRecipe(){

    this.router.navigate(['edit'],{relativeTo:this.route});

  }

}
