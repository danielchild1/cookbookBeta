import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models/recipes';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe$: Observable<Recipe>
  @Input() recipe: Recipe
  @Output() select = new EventEmitter<Recipe>();
  constructor(private recipeService : RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipe$ = this.recipeService.getRecipe(this.route.snapshot.params['id'])
  }

}
