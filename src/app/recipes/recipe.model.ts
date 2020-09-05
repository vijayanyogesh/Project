import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public descrption: string;
    public imagePath: string;
    public ingredient: Ingredient[];

    constructor(name: string, desc: string,imagePath: string, ingredient: Ingredient[]){

        this.name = name;
        this.descrption = desc;
        this.imagePath = imagePath;
        this.ingredient = ingredient;

    }
}