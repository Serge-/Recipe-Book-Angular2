import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Schnitzel', 'Vary Tasty', 'http://www.paramountbutchershopusa.com/assets/uploads/tray_item_images/1435171328.png',[]),
      new Recipe('Salad', 'Vary Healthy', 'http://brownbagonline.com/wp-content/uploads/2013/07/MissMaeSalad.png',[])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
