import {Routes} from '@angular/router'
import { RecipeListComponent } from './components/recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component'

export const routes : Routes =[
    {path: 'recipes', component: RecipeListComponent},
    {path: 'recipes/:id', component: RecipeDetailComponent},
    {path: "", redirectTo: "recipes", pathMatch: "full"}
]