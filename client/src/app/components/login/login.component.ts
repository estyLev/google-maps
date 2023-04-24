import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userS: UserService,) { }

  username: string = "";
  password: string = "";
  
  ngOnInit() {
  }

  login(): void {
    this.userS.login(this.password,this.username).subscribe(
      data => {this.router.navigate(['/search'])},
      err => alert("password or nam is icorrect")
    )
    
  }

  
}
