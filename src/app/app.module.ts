import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IngredientsProvider } from '../providers/ingredients/ingredients';
import { SearchPage } from '../pages/search/search';
import { RecipesProvider } from '../providers/recipes/recipes';
import { EditRecipeInfoPage } from '../pages/edit-recipe/tabs/edit-recipe-info/edit-recipe-info';
import { EditRecipeIngredientsPage } from '../pages/edit-recipe/tabs/edit-recipe-ingredients/edit-recipe-ingredients';
import { EditRecipePreparationPage } from '../pages/edit-recipe/tabs/edit-recipe-preparation/edit-recipe-preparation';
import { EditRecipePage } from '../pages/edit-recipe/edit-recipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchPage,
    EditRecipeInfoPage,
    EditRecipeIngredientsPage,
    EditRecipePreparationPage,
    EditRecipePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SearchPage,
    EditRecipePage,
    EditRecipeIngredientsPage,
    EditRecipePreparationPage,
    EditRecipeInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IngredientsProvider,
    RecipesProvider
  ]
})
export class AppModule {}
