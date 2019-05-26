import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe' ,
          'This is a simple Task' ,
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
          [
              new Ingredient('Cheese' , 1),
              new Ingredient('Fries' , 30)
          ]),
        new Recipe(
          'Another Test Recipe' ,
          'This is a simple Task' ,
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
          [
              new Ingredient('Noodels' , 1),
              new Ingredient('patoto' , 2)
          ])
      ];
      constructor(private slService: ShoppingListService) {}
      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}
