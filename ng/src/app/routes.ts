import {Routes} from '@angular/router'
import { RecipeListComponent } from './components/recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component'
import { RecipeFourmComponent } from './components/recipe-fourm/recipe-fourm.component'

export const routes : Routes =[
    {path: 'recipes', component: RecipeListComponent},
    {path: 'recipes/new', component: RecipeFourmComponent},
    {path: 'recipes/:id', component: RecipeDetailComponent},
    {path: 'recipes/:id/edit', component: RecipeFourmComponent},
    {path: "", redirectTo: "recipes", pathMatch: "full"}
]