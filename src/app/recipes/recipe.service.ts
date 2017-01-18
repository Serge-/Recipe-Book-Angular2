import {Injectable, EventEmitter} from '@angular/core';
import { Recipe } from './recipe'
import {Ingredient} from "../shared/ingredient";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class RecipeService {
  recipeChanged = new EventEmitter<Recipe[]>();

  private  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'https://schnitzel.house/wp-content/uploads/2014/05/schnitzel_480.png',[
        new Ingredient('French Fries', 2),
        new Ingredient('Fresh Meat', 1)
    ]),
    new Recipe('Salad', 'Very Healthy', 'http://brownbagonline.com/wp-content/uploads/2013/07/MissMaeSalad.png',[
        new Ingredient('Salad', 2),
        new Ingredient('Oil', 1)]),
      new Recipe('Ice Cream', 'Very sweet', 'http://pngimg.com/upload/ice_cream_PNG5101.png',[
          new Ingredient('Milk', 2),
          new Ingredient('Sugar', 3)])

  ];
  constructor(private http: Http) { }

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
  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return  this.http.put('https://recipeapp-808e5.firebaseio.com/recipes.json', body, {headers: headers});
  }
  fetchData() {
    return this.http.get('https://recipeapp-808e5.firebaseio.com/recipes.json')
        .map((response: Response) => response.json())
        .subscribe(
            (data: Recipe[]) => {
              this.recipes = data;
              this.recipeChanged.emit(this.recipes);
            }
        );
  }
}
