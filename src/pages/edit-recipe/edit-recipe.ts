import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipesProvider } from '../../providers/recipes/recipes';
import { Recipe } from '../../models/Recipe';
import { EditRecipeInfoPage } from './tabs/edit-recipe-info/edit-recipe-info';
import { EditRecipeIngredientsPage } from './tabs/edit-recipe-ingredients/edit-recipe-ingredients';
import { EditRecipePreparationPage } from './tabs/edit-recipe-preparation/edit-recipe-preparation';

/**
 * Generated class for the EditRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage {

  tab1Root = EditRecipeInfoPage;
  tab2Root = EditRecipeIngredientsPage;
  tab3Root = EditRecipePreparationPage;

  newRecipe = false;
  currentRecipe: Recipe;

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipesService: RecipesProvider) {
    this.currentRecipe = recipesService.getCurrentRecipe();
    this.newRecipe = this.currentRecipe.id === 0; 
  }

  save() {
    this.navCtrl.pop();
  }


}
