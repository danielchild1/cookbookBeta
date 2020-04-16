import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipes';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss']
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe: Recipe
  @Output() select = new EventEmitter<Recipe>()
  constructor(private RecipeService: RecipeService) { }

  ngOnInit() {
  }

}
