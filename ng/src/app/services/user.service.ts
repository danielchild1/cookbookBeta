import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { User } from '../models/user';
import { map } from 'rxjs/operators'

const httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private cookieService : CookieService){}

    register(user: User){
        return this.http.post("/api/users/register", user, httpHeaders)
    }

    signin(user: User) : any{
        let res = this.http.post("/api/users/signin", user, httpHeaders)
        return res.pipe(
            map(data =>{
                if(data["token"]){
                    localStorage.setItem("token", data["token"])
                    return true
                }
                else{
                    return false
                }
            })
        )
    }

    signout() : void {
        this.cookieService.delete("token")
        localStorage.removeItem("token")
    }

    static isAuthenticated() : boolean{
        return localStorage.getItem("token") !== null
    }


}