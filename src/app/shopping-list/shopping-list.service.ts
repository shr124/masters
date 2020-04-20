import { Ingredients } from "../shared/ingredients.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    onDataChange = new Subject<Ingredients[]>();
    onStartEdit = new Subject<number>();
    ingredients: Ingredients[] = [

        new Ingredients('Apple', '2'),
        new Ingredients('Mangoes', '3')
    ];

    onNewIngredient() {
        return this.ingredients.slice();

    }
    onAdd(ingre: Ingredients) {

        this.ingredients.push(ingre);
        this.onDataChange.next(this.ingredients.slice());

    }
    onRecipeToShopping(ingre: Ingredients[]){
        this.ingredients.push(...ingre);
        this.onDataChange.next(this.ingredients.slice());
    }
    onSelectRecipeItem(index: number){
        return this.ingredients[index];
    }

    onUpdate(index: number, updatedIngre: Ingredients){
        this.ingredients[index] = updatedIngre;
        this.onDataChange.next(this.ingredients.slice());
    }
    onDeleteIngre(index: number){
        this.ingredients.splice(index,1);
        this.onDataChange.next(this.ingredients.slice());
    }
}