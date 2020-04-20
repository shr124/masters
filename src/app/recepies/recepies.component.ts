import { Component, OnInit } from '@angular/core';
import { recipe } from './recepies.model';
import { RecipeService } from './recepie.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  
})
export class recipesComponent implements OnInit {
  detailrecipe: recipe;

  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (xRecipe: recipe) => {
        this.detailrecipe = xRecipe;
      }
    );
  }
  

}
