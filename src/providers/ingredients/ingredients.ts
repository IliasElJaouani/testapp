import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IngredientsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IngredientsProvider {

  url = 'https://world.openfoodfacts.org/cgi/search.pl?search_simple=1&action=process&json=1&search_terms=';
  testArray = ["sel", "sucre"];
  constructor(public http: HttpClient) {
    console.log('Hello IngredientsProvider Provider');
  }

  search(searchTerm: string): string[] {
    return this.testArray;
  }

  searchIngredients(searchTerm: string): Promise<string[]> {
    return new Promise(resolve => {
      this.http.get(this.url + searchTerm).subscribe(data => {
        const response: any = data;
        const products: any = response.products;
        const results: string[] = [];
        for(let product of products){
          if (product && product.generic_name_fr) {
            const description = product.generic_name_fr.trim();
            if (description !== '') {
              results.push(description);
              if (results.length > 20) {
                break;
              }
            }
          }
        };
        resolve(results);
      }, err => {
        console.log(err);
      });
    });
  }
}
