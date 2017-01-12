import { Injectable } from '@angular/core';
import { Recipe } from './recipe'

@Injectable()
export class RecipeService {
  private  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Vary Tasty', 'http://www.paramountbutchershopusa.com/assets/uploads/tray_item_images/1435171328.png',[]),
    new Recipe('Salad', 'Vary Healthy', 'http://brownbagonline.com/wp-content/uploads/2013/07/MissMaeSalad.png',[])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes
  }

}
