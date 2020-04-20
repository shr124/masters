import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recepies/recepie.service";
import 'rxjs/rx';
import { recipe } from "../recepies/recepies.model";
import { AuthService } from "../auth/auth.service";
import { map } from "rxjs/operators";

@Injectable()
export class SaveDataService {
    constructor(private http: Http, private recipeService: RecipeService,
        private authService: AuthService) { }

    SaveData() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-market-76840.firebaseio.com/recipe.json?auth=' + token, this.recipeService.onrecipe());

    }

    getData() {

        const token = this.authService.getToken();
        this.http.get('https://ng-market-76840.firebaseio.com/recipe.json?auth=' + token)

            .subscribe(
                (response) => {
                    const recipes: recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    this.recipeService.onFetchFromServer(recipes);
                }



            )

    }
}