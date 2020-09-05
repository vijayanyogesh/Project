import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import{Recipe} from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {


  recipes: Recipe[] =[];

  constructor(private recipe: RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.recipes = this.recipe.getRecipes();
  }

  onEditNew(){
    this.router.navigate(['new'],{relativeTo : this.route});
  }

}
