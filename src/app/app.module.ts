import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SaveDataService } from './shared/save-data.service';
import {HttpModule} from '@angular/http';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { RecipesModule } from './recepies/recipes.module';
import { RecipeService } from './recepies/recepie.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent
  ],  
  imports: [
    BrowserModule, RecipesModule, AppRoutingModule,
    CoreModule, HttpModule, ShoppingListModule, AuthModule, AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
