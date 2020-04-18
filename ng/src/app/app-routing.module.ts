import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeFourmComponent } from './components/recipe-fourm/recipe-fourm.component';
import { AuthGuard } from './services/auth.guard';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserSigninComponent } from './components/user-signin/user-signin.component';


const routes: Routes = [
  {path: "", redirectTo: "recipes", pathMatch: "full"},
  {path: 'recipes', component: RecipeListComponent},
  {path: 'recipes/new', component: RecipeFourmComponent},
  {path: 'recipes/:id', component: RecipeDetailComponent},
  {path: 'recipes/:id/edit', component: RecipeFourmComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'signin', component: UserSigninComponent}
];
//, canActivate: [AuthGuard]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
