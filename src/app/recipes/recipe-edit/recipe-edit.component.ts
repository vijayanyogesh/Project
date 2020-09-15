import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, RequiredValidator, Validators, FormArray, FormControlName } from '@angular/forms';
import { RecipeService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route:ActivatedRoute, private recipeService:RecipeService,private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.editMode = param['id'] != null;
        console.log(this.editMode);
        this.initForm();
      }
    );
  }

  onSubmit(){
    const newRecipe = new Recipe(this.recipeForm.value['name'],
                                 this.recipeForm.value['description'],
                                 this.recipeForm.value['imagePath'],
                                 this.recipeForm.value['ingredients']);
    if(this.editMode){
      this.recipeService.editRecipe(this.id,newRecipe)
    }else{
      this.recipeService.addRecipe(newRecipe);
    }

    this.recipeForm.reset();
    this.router.navigate(['../'],{relativeTo : this.route});
    console.log(this.recipeForm);

  }

  onCancel(){
    this.recipeForm.reset();
    this.router.navigate(['../'],{relativeTo : this.route});
  }

  addIng(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name' : new FormControl(null,Validators.required),
        'amount' : new FormControl(null,Validators.required),
      })
    )
  }

  private initForm(){
    let recipeName = '';
    let imagePath = '';
    let description = '';
    let recipeIng = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.displayRecipes(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.descrption;
      if(recipe['ingredient']){
        for(let ing of recipe.ingredient){
          recipeIng.push(
            new FormGroup({
              'name' : new FormControl(ing.name,Validators.required),
              'amount' : new FormControl(ing.amount,Validators.required),
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName,Validators.required),
      'imagePath' : new FormControl(imagePath,Validators.required),
      'description' : new FormControl(description,Validators.required),
      'ingredients' : recipeIng

    });
  }

  get controls() { 
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  deleteIng(id:number){

    (<FormArray>this.recipeForm.get('ingredients')).removeAt(id);

  }

}
