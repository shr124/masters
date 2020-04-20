import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "../recepies/recepie.service";
import { SaveDataService } from "../shared/save-data.service";
import { AuthService } from "../auth/auth.service";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ], 
    imports: [
        AppRoutingModule,
        SharedModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        ShoppingListService, RecipeService, SaveDataService, AuthService
    ]
})
export class CoreModule {

}