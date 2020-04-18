import {Routes} from '@angular/router'
import { RecipeListComponent } from './components/recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component'
import { RecipeFourmComponent } from './components/recipe-fourm/recipe-fourm.component'
import { UserRegisterComponent } from './components/user-register/user-register.component'
import { AuthGuard } from './services/auth.guard'

export const routes : Routes =[
    {path: 'recipes', component: RecipeListComponent},
    {path: 'recipes/new', component: RecipeFourmComponent, canActivate: [AuthGuard]},
    {path: 'recipes/:id', component: RecipeDetailComponent},
    {path: 'recipes/:id/edit', component: RecipeFourmComponent, canActivate: [AuthGuard]},
    {path: 'register', component: UserRegisterComponent},
    {path: 'signin', component: UserRegisterComponent},
    {path: "", redirectTo: "recipes", pathMatch: "full"}
]
//, canActivate: [AuthGuard]