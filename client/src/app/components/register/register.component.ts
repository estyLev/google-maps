import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  submitted = false;
  user: User ={
    name: '',
    password: '',
    email: '',
    role: ''
  };
  hide = true;
  constructor(private formBuilder: FormBuilder, private userS: UserService, private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      },

    );
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)
    );

    this.user.name = this.registerForm.value.firstName
    this.user.email = this.registerForm.value.email
    this.user.password = this.registerForm.value.password
    this.user.role = "user"
    this.userS.addUser(this.user).subscribe(
      data=>{this.router.navigate(['/login']);
       console.log(data);
      },
      err=>console.log(err)
      
    )
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
