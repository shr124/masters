import { Component, OnInit} from '@angular/core';
import { recipe } from '../recepies.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recepie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class recipeDetailComponent implements OnInit {
  incomingrecipe: recipe;
  id: number;
  constructor(private recipeService: RecipeService, private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
     (params: Params) => {
      this.id = +params['id'];
      this.incomingrecipe = this.recipeService.getRecipe(this.id);
     }
    )
  }
  addToShoppingList()
  {
    this.recipeService.onAddtoShoppingList(this.incomingrecipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.activeRoute})
  }

  onDelete(){
    this.recipeService.onDeleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
