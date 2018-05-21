import { Component } from '@angular/core';
import { NavController, NavParams, reorderArray } from 'ionic-angular';
import { RecipesProvider } from '../../../../providers/recipes/recipes';

/**
 * Generated class for the EditRecipePreparationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-recipe-preparation',
  templateUrl: 'edit-recipe-preparation.html',
})
export class EditRecipePreparationPage {

  newItem: string = '';
  showAddRow = false;
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public recipesService: RecipesProvider) {
    this.items = this.getPreparationList();
    this.showAddRow = this.items.length === 0 ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipePreparationPage');
  }
  
  getPreparationList() {
    return this.recipesService.currentRecipe.preparationSteps;
  }

  doShowAddRow(value) {
    this.newItem = '';
    this.showAddRow= value;
  }

  addItem(){
    if (this.newItem.trim() === '') return;
    this.recipesService.addPreparationItem(this.newItem);
    this.doShowAddRow(false);
  }

  removeItem(item) {
    this.items = this.recipesService.removePreparationItem(item);
  }

  reorderItems(indexes) {
    this.items = this.recipesService.reorderPreparationItems(indexes);
  }

}
