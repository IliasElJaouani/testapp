import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { RecipesProvider } from '../../../../providers/recipes/recipes';
import { Recipe } from '../../../../models/Recipe';

/**
 * Generated class for the EditRecipeInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-recipe-info',
  templateUrl: 'edit-recipe-info.html',
})
export class EditRecipeInfoPage {

  currentRecipe: Recipe;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private recipesService : RecipesProvider) {
    this.currentRecipe = recipesService.currentRecipe;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditRecipeInfoPage');
  }

  async saveRecipe() {
    await this.recipesService.saveRecipe();
    console.dir(this.navCtrl);
    this.navCtrl.parent.parent.pop();
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Ajouter image',
      buttons: [
       {
          text: 'Phototèque',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Camera',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Supprimer image',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
