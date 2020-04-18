import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipeService } from "src/app/services/recipe.service";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import {ToastrService } from 'ngx-toastr';
import { Recipe } from "src/app/models/recipes";

@Component({
  selector: "recipe-fourm",
  templateUrl: "./recipe-fourm.component.html",
  styleUrls: ["./recipe-fourm.component.scss"],
})
export class RecipeFourmComponent implements OnInit {
  recipeForm: FormGroup;
  isEdit: boolean;

  constructor(
    private route: ActivatedRoute,
    private RecipeService: RecipeService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    console.log("Checkpoint 1")
    this.recipeForm = this.fb.group({
      id: [null],
      title: [null, Validators.required],
      cookTime: [null],
      prepTime: [null],
      servings: [null],
      ingredients: [null, Validators.required],
      directions: [null, Validators.required],
      image: [null],
    });

    this.isEdit = !!this.route.snapshot.params["id"];
    if (this.isEdit) {
      this.RecipeService.getRecipe(
        this.route.snapshot.params["id"]
      ).subscribe((c) => {this.recipeForm.patchValue(c)});
    }
  }
  get title() {return this.recipeForm.get('title')}
  get cookTime() {return this.recipeForm.get('cookTime')}
  get prepTime() {return this.recipeForm.get('prepTime')}
  get servings() {return this.recipeForm.get('servings')}
  get ingredients() {return this.recipeForm.get('ingredients')}
  get directions() {return this.recipeForm.get('directions')}

  submitForm(f: NgForm){
    console.log("Checkpoint 2")
    if(f.valid){
      const cake: Recipe = Object.assign({}, this.recipeForm.value)
      cake.updated_at = new Date()
      if(this.isEdit){
        console.log("Checkpoint 3")
        this.RecipeService.updateRecipe(cake).subscribe(date =>{
          this.toastr.success("Updated Successfully")
          this.router.navigate([`/recipes/${cake.id}`])
        })
      }
      else{
        console.log("Checkpoint 4")
        cake.added_at = cake.updated_at
        this.RecipeService.addRecipe(cake).subscribe(data =>{
          this.toastr.success("Added Successfully")
          this.router.navigate([`/recipes`])
        })
      }
    }
  }

 
}
