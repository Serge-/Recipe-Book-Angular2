import {Injectable, EventEmitter} from '@angular/core';
import { Recipe } from './recipe'
import {Ingredient} from "../shared/ingredient";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class RecipeService {
  recipeChanged = new EventEmitter<Recipe[]>();

  private  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Vary Tasty', 'http://www.paramountbutchershopusa.com/assets/uploads/tray_item_images/1435171328.png',[
        new Ingredient('French Fries', 2),
        new Ingredient('Fresh Meat', 1)
    ]),
    new Recipe('Salad', 'Vary Healthy', 'http://brownbagonline.com/wp-content/uploads/2013/07/MissMaeSalad.png',[])
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
