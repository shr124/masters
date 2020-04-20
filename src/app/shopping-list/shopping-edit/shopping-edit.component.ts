import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { recipe } from '../../recepies/recepies.model';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('sName') nameRef: ElementRef;
  // @ViewChild('sAmount') amountRef: ElementRef;
  
  constructor(private shoppingListService: ShoppingListService) { }
  @ViewChild('f') formItem: NgForm;
  subscription: Subscription;
  editMode = false;
  indexSelected: number;
  selectedSlItem: Ingredients;
  ngOnInit() {
    this.subscription = this.shoppingListService.onStartEdit.subscribe(
      (index: number) =>{
        this.editMode = true;
        this.indexSelected = index;
        this.selectedSlItem=this.shoppingListService.onSelectRecipeItem(this.indexSelected);
        this.formItem.setValue({
          'name': this.selectedSlItem.name,
          'amount': this.selectedSlItem.amount
        }) 
      }
    )
  }
  


  onAdd(form: NgForm)
  {
    // const nameCon = this.nameRef.nativeElement.value;
    // const amountCon = this.amountRef.nativeElement.value;
    const value = form.value;
    const ingre = new Ingredients(value.name, value.amount);
    if(this.editMode){
      this.shoppingListService.onUpdate(this.indexSelected,ingre);
    }
    else{
      this.shoppingListService.onAdd(ingre);
    }
    this.editMode = false;
    form.reset();
    
  }
  onClear(){
    this.formItem.reset();
    this.editMode = false;
  }
  onDelete(){
    this.onClear();
    this.shoppingListService.onDeleteIngre(this.indexSelected);
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
