import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './components/recipe-list-item/recipe-list-item.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeFourmComponent } from './components/recipe-fourm/recipe-fourm.component';
import { RecipeService } from './services/recipe.service';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserSigninComponent } from './components/user-signin/user-signin.component';
import { UserService } from './services/user.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailComponent,
    RecipeFourmComponent,
    UserRegisterComponent,
    UserSigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [RecipeService, UserService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
