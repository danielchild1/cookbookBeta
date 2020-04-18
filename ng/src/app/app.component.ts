import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-front-end';
  constructor(private router : Router, private userService: UserService){}

  get signedIn(){
    return UserService.isAuthenticated()
  }

  get notSignedIn(){
    return !this.signedIn
  }

  signout(){
    this.userService.signout()
    this.router.navigate(["/recipes"])
  }
}
