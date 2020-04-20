import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model'
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredients [];
  destroyIngredients: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.onNewIngredient();
    this.destroyIngredients=this.shoppingListService.onDataChange.subscribe(
      (ingre: Ingredients[]) => {
        this.ingredients = ingre;
      }
    );
  }

  ngOnDestroy(){
    this.destroyIngredients.unsubscribe();
  }

  onEdit(index: number){
    this.shoppingListService.onStartEdit.next(index);
  }
  

}
