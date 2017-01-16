import { Injectable } from '@angular/core';
import { Recipe } from './recipe'
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  private  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Vary Tasty', 'http://www.paramountbutchershopusa.com/assets/uploads/tray_item_images/1435171328.png',[
        new Ingredient('French Fries', 2),
        new Ingredient('Fresh Meat', 1)
    ]),
    new Recipe('Salad', 'Vary Healthy', 'http://brownbagonline.com/wp-content/uploads/2013/07/MissMaeSalad.png',[])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes
  }
  getRecipe(id: number){
    return this.recipes[id]
  }
  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
}
