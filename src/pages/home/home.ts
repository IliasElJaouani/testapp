import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipesProvider } from '../../providers/recipes/recipes';
import { EditRecipePage } from '../edit-recipe/edit-recipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  recipes: any[];
  recipesLoaded = false;
  constructor(public navCtrl: NavController, private recipesService: RecipesProvider) {
    this.getRecipes();
    this.recipesService.refreshRecipes.subscribe(()=>{
      this.getRecipes();
    })
  }

  goToAddRecipe () {
      //push another page onto the history stack
      //causing the nav controller to animate the new page in
      this.recipesService.setCurrentRecipe(0);
      this.navCtrl.push(EditRecipePage);
  }
  async getRecipes () {
    this.recipesLoaded = false;
      this.recipes = await this.recipesService.getMyRecipes();
    this.recipesLoaded = true;      
   }
 
}
