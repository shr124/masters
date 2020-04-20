import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { recipe } from '../../recepies.model';
import { recipeListComponent } from '../../recepie-list/recepie-list.component';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class recipeItemComponent {
  @Input() recipe1: recipe;
  @Input() index: number;
  
  constructor() {

  }

  // onSelectItem(){
  //   this.recipeSevice.recipeSelected.emit(this.recipe1);
  // }

  
  
}
