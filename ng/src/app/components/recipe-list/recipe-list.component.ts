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

  sortBy(sort){
    this.sortRecipeBy = sort
  }

  sortRecipes(recipes: Recipe[]){
    switch(this.sortRecipeBy){
      case 'abc':
        return recipes.sort((a, b) => {return a.title < b.title ? -1: (a.title > b.title ? 1:0)})
      case 'new':
        return recipes.sort((a, b) => {return a.added_at < b.added_at ? -1: (a.added_at > b.added_at ? 1:0)})
    }
  }
}
