import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IngredientsProvider } from '../../providers/ingredients/ingredients';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchTerm: string;
  listItems: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private ingredientsService : IngredientsProvider) {
    this.searchTerm = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  async search() {
    this.listItems = await this.ingredientsService.searchIngredients(this.searchTerm);
  }

  itemTapped(event, item) {}

}
