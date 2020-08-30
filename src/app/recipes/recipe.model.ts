
export class Recipe {
    public name: string;
    public descrption: string;
    public imagePath: string;

    constructor(name: string, desc: string,imagePath: string){

        this.name = name;
        this.descrption = desc;
        this.imagePath = imagePath;

    }
}