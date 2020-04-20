import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { recipesComponent } from "./recepies.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { recipeDetailComponent } from "./recepie-detail/recepie-detail.component";
import { AuthGuard } from "../auth/auth-guard.service";
const recipesRouting: Routes = [
    
    {
        path: 'recipes', component: recipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: recipeDetailComponent},
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(recipesRouting)
    ],
    exports: [
        RouterModule
    ]
})

export class RecipesRoutingModule {}