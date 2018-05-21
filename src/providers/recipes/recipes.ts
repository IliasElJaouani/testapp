import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { Storage } from '@ionic/storage';
import { reorderArray } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the RecipesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipesProvider {

  currentRecipe: Recipe;
  public refreshRecipes = new Subject<any>();

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello RecipesProvider Provider');
  }
 
  doRefreshRecipes() {
      this.refreshRecipes.next();
  }
  async saveRecipe(): Promise<boolean> {
    let recipes:Recipe[] = await this.storage.get('myRecipes');
    if (this.currentRecipe.id === 0 ){
      const id = recipes.length > 0 ? Math.max.apply(Math, recipes.map(function(o){return o.id;})) + 1 : 1;
      this.currentRecipe.id = id;
      recipes.push(this.currentRecipe);
    } else {
      let updateItem = recipes.find(this.findIndexToUpdate, this.currentRecipe.id);
      let index = recipes.indexOf(updateItem);
      recipes[index] = this.currentRecipe;
    }
    await this.storage.set("myRecipes", recipes);    
    this.doRefreshRecipes();
    return true;
  }

  findIndexToUpdate(newItem) { 
    return newItem.id === this;
  }

  setCurrentRecipe(id) {
    if (id === 0) {
      this.currentRecipe = this.newRecipe();
    }
  }
  newRecipe () {
    const obj: Recipe = {
      id: 0,
      comment: '',
      date: null,
      description: '',
      ingredients: [],
      title: '',
      preparationSteps: []
    }
    return obj;
  }

  async getMyRecipes(): Promise<any[]>{
    let recipes = await this.storage.get('myRecipes');
    if(recipes) {
      return recipes;
    }
    return [];
  }

  addIngredientItem(item) {
    this.currentRecipe.ingredients.push(item);
    return this.currentRecipe.ingredients;
  }

  removeIngredientItem(item) {
    this.currentRecipe.ingredients.forEach( (item1, index) => {
      if(item === item1) this.currentRecipe.ingredients.splice(index,1);
    });
    return this.currentRecipe.ingredients;
  }
  
  removePreparationItem(item) {
    this.currentRecipe.preparationSteps.forEach( (item1, index) => {
      if(item === item1) this.currentRecipe.preparationSteps.splice(index,1);
    });
    return this.currentRecipe.preparationSteps;
  }
  
  addPreparationItem(item) {
    this.currentRecipe.preparationSteps.push(item);
    return this.currentRecipe.preparationSteps;
  }

  reorderPreparationItems(indexes) {
    this.currentRecipe.preparationSteps = reorderArray(this.currentRecipe.preparationSteps, indexes);    
    return this.currentRecipe.preparationSteps;    
  }
}
