import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { Storage } from '@ionic/storage';
import { reorderArray } from 'ionic-angular';

/*
  Generated class for the RecipesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipesProvider {

  currentRecipe: Recipe;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello RecipesProvider Provider');
  }

  getCurrentRecipe () {
    const result = this.currentRecipe; 
    return result;
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
