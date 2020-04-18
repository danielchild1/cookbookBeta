import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe} from '../../models/recipes';
import {RecipeService} from 'src/app/services/recipe.service';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  sortRecipeBy: string = 'abc'
  recipes$: Observable<Recipe[]>
  constructor(private RecipeService: RecipeService) { }

  ngOnInit() {
    this.recipes$ = this.RecipeService.getRecipes()
  }

  sortRecipes(recipes: Recipe[]){
    return recipes.sort((a, b) => {return a.title < b.title ? -1: (a.title > b.title ? 1:0)})
  }
}
