import { recipe } from "./recepies.model";
import { Output, EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
   recipeSelected = new EventEmitter<recipe>();
   onChangeRecipe= new Subject<recipe[]>();

recipes: recipe[]= [ new recipe('Egg Dum biryani','Tasty south indian dish', 'https://www.faskitchen.com/wp-content/uploads/2017/09/egg-dum-biryani.jpg', [
  new Ingredients('Egg', '10'), new Ingredients('Rice', '1')
]),
  new recipe('Anna Sambar', 'Tasty south indian meal.','http://kannammacooks.com/wp-content/uploads/Murungakkai-Sambar-kannammacooks.com-Recipe-Tamilnadu-Madras-style-murungakkai-sambar-idli-Indian-Chennai-drumstick-Sambar-1.jpg', []),
  new recipe('Curd Rice','Rice with yogurt.','https://i1.wp.com/cookilicious.com/wp-content/uploads/2016/05/TraditionalCurdRice-10.jpg?resize=480%2C270&ssl=1', [])
  ];

  onrecipe(){
     return this.recipes.slice();
  }
  constructor(private shoppingListService: ShoppingListService){

  }

  onAddtoShoppingList(ingre: Ingredients[]){
    this.shoppingListService.onRecipeToShopping(ingre);
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
  onAddRecipe(addRecipe: recipe ){
    this.recipes.push(addRecipe);
    this.onChangeRecipe.next(this.recipes);
  }
  onUpdateRecipe(index: number, updatedRecipe: recipe ){
    this.recipes[index]=updatedRecipe;
    this.onChangeRecipe.next(this.recipes);
  }

  onDeleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.onChangeRecipe.next(this.recipes);
  }

  onFetchFromServer(recipes: recipe[]){
    this.recipes = recipes;
    this.onChangeRecipe.next(this.recipes.slice());
  }
};