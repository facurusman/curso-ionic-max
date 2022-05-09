import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipe: Recipe[] = [
    {
      id:'r1',
      title:'Rusman',
      imageUrl:'https://i.blogs.es/64f94b/ola/450_1000.jpg',
      ingredients: ['a', 'b']
    },
    {
      id:'r2',
      title:'Facundo',
      imageUrl:'https://i.blogs.es/64f94b/ola/450_1000.jpg',
      ingredients: ['c', 'd']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipe];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipe.find(r =>r.id === recipeId)
    };
  }

  deleteRecipe(recipeId: string){
    this.recipe = this.recipe.filter(r =>r.id !== recipeId);
  }
}
