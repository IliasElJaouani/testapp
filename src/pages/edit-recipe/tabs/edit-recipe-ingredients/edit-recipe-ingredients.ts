import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipesProvider } from '../../../../providers/recipes/recipes';

/**
 * Generated class for the EditRecipeIngredientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-recipe-ingredients',
  templateUrl: 'edit-recipe-ingredients.html',
})
export class EditRecipeIngredientsPage {

  newItem: string = '';
  showAddRow = false;
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public recipesService: RecipesProvider) {
    this.items = this.getIngredientList();
    this.showAddRow = this.items.length === 0 ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipeIngredientsPage');
  }

  getIngredientList() {
    return this.recipesService.getCurrentRecipe().ingredients;
  }

  doShowAddRow(value) {
    this.newItem = '';
    this.showAddRow= value;
  }

  removeIngredient(item) {
    this.items = this.recipesService.removeIngredientItem(item);
  }

  addIngredient(){
    if (this.newItem.trim() === '') return;
    this.recipesService.addIngredientItem(this.newItem);
    this.doShowAddRow(false);
  }

}
