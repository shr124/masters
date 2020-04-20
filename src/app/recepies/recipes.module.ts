import { NgModule } from "@angular/core";
import { recipesComponent } from "./recepies.component";
import { recipeListComponent } from "./recepie-list/recepie-list.component";
import { recipeItemComponent } from "./recepie-list/recepie-item/recepie-item.component";
import { recipeDetailComponent } from "./recepie-detail/recepie-detail.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
    recipesComponent,
    recipeListComponent,
    recipeItemComponent,
    recipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ],
    
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule,
        
    ],
    exports: [
        recipesComponent
    ]
})

export class RecipesModule{

}