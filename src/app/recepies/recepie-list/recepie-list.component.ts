import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { recipe } from '../recepies.model';
import { RecipeService } from '../recepie.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class recipeListComponent implements OnInit{

  
  recipes: recipe[];
  constructor(private recipeService: RecipeService, 
  private activeRoute: ActivatedRoute, private router: Router ){

  }

  ngOnInit(){
    this.recipeService.onChangeRecipe.subscribe(
      (recipes: recipe[]) => {
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.onrecipe();
  }

  onSelectNew(){
    this.router.navigate(['new'], {relativeTo: this.activeRoute})
  }
  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   this.recipeService.onChangeRecipe.unsubscribe()  ;
  // }  
  
}
