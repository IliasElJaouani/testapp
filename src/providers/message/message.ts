import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {

  constructor(public http: HttpClient) {
  }
  private refreshRecipes = new Subject<any>();
 
  doRefreshRecipes(message: string) {
      this.refreshRecipes.next();
  }

}
