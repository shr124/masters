import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuard } from "./auth/auth-guard.service";
import { HomeComponent } from "./core/home/home.component";
const appRoutes: Routes = [
    { path: '', component: HomeComponent  },
    {path: 'recipes', loadChildren: './recepies/recepies.component#recipesComponent' },
   { path: 'shopping-list', component: ShoppingListComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {

}