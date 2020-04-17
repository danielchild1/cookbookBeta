import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from "src/app/services/recipe.service";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { Recipe } from "src/app/models/recipes";

@Component({
  selector: "recipe-fourm",
  templateUrl: "./recipe-fourm.component.html",
  styleUrls: ["./recipe-fourm.component.scss"],
})
export class RecipeFourmComponent implements OnInit {
  recipeForm: FormGroup;
  numIngredients: number = 0;
  numDirections: number = 0;
  isEdit: boolean;
  constructor(
    private route: ActivatedRoute,
    private RecipeService: RecipeService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipeForm = this.fb.group({
      id: [null],
      title: [null, Validators.required],
      cookTime: [null],
      prepTime: [null],
      servings: [null],
      image: [null, Validators.required],
      appatizer: [null],
      breakfast: [null],
      dessert: [null],
      mainDish: [null],
      salad: [null],
      soup: [null],
    });

    this.isEdit = !!this.route.snapshot.params["id"];
    if (this.isEdit) {
      this.RecipeService.getRecipe(
        this.route.snapshot.params["id"]
      ).subscribe((c) => this.recipeForm.patchValue(c));
    }
  }

  Note = function ($scope) {
    $scope.ingredients = [];
    $scope.directions = [];

    $scope.addIngredients = function () {
      $scope.ingredients.push({});
      this.numIngredients += 1;
    };
    $scope.addDirections = function () {
      $scope.directions.push({});
      this.numDirections += 1;
    };
  };

  get title() {return this.recipeForm.get('title')}
  get cookTime() {return this.recipeForm.get('cookTime')}
  get prepTime() {return this.recipeForm.get('prepTime')}
  get servings() {return this.recipeForm.get('servings')}
  get appetizer() {return this.recipeForm.get('appetizer')}
  get breakfast() {return this.recipeForm.get('breakfast')}
  get dessert() {return this.recipeForm.get('dessert')}
  get mainDish() {return this.recipeForm.get('mainDish')}
  get salad() {return this.recipeForm.get('salad')}
  get soup() {return this.recipeForm.get('soup')}

  submitForm(f: NgForm){
    if(f.valid){
      const rip: Recipe = Object.assign({}, this.recipeForm.value)
      rip.updated_at = new Date()
      if(this.breakfast){
        rip.tag.push("breakfast")
      }
      if(this.appetizer){
        rip.tag.push("appetizer")
      }
      if(this.dessert){
        rip.tag.push("dessert")
      }
      if(this.mainDish){
        rip.tag.push("mainDish")
      }
      if(this.salad){
        rip.tag.push("salad")
      }
      if(this.soup){
        rip.tag.push("soup")
      }
    }
  }
}
