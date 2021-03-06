import {Observable, of} from 'rxjs';
import { HttpHeaders, HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipes'

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class RecipeService {

  recipeUrl = "/api/recipes"

  constructor(private http: HttpClient) { }

  getRecipe(id): Observable<Recipe>{
    let url = `${this.recipeUrl}/${id}`
    return this.http.get<Recipe>(url)
  }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.recipeUrl)
  }

  addRecipe(r : Recipe) : Observable<Recipe>{
    console.log("Checkpoint 6")
    return this.http.post<Recipe>(this.recipeUrl, r, httpHeaders)
  }

  updateRecipe(r: Recipe): Observable<Recipe>{
    console.log("Checkpoint 7")
    let url = `${this.recipeUrl}/${r.id}`
    //this.http.put<Recipe>(url, r, httpHeaders).subscribe(title => console.log(title))//trouble shooting
    return this.http.put<Recipe>(url, r, httpHeaders)
  }

}
