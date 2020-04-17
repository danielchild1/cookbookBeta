import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  userRegister : FormGroup
  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private userService : UserService) { }

  ngOnInit() {
    this.userRegister = this.fb.group({
      _id: [null],
      firstName: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(/.+@.+\..+/)]],
      password: [null, Validators.required],
    })
  }

  submitForm(f : NgForm) : void {
    if(f.valid){
      const user : User = Object.assign({}, this.userRegister.value)
      this.userService.register(user).subscribe(
        res => {
          this.toastr.success("Successfully registered")
          this.router.navigate(["/recipes"])
        },
        err =>{
          this.toastr.error("Unable to register")
        }
      )
    }

  }

  get firstName(){return this.userRegister.get('firstName')}
  get email(){return this.userRegister.get('email')}
  get password(){return this.userRegister.get('password')}

}
