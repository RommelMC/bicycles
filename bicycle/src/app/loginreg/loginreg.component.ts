import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginreg',
  templateUrl: './loginreg.component.html',
  styleUrls: ['./loginreg.component.css']
})
export class LoginregComponent implements OnInit {
  user = new User();
  loginInfo = {email:"", password:""};
  regErrors = [];
  logErrors = false;
  randBike = {};
  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit() {
    this._apiService.logoff();
    this.getRandomBike();
  }

  register(){
    this.regErrors = [];
    this.logErrors = false;
    //Use service to send api call that will save user
    this._apiService.registerUser(this.user).then(result => {
      //Check validation errors
      if(result != null){
        if(result.errors){
          for(var x in result.errors){
            if(x != '__proto__')
              this.regErrors.push(result.errors[x].message);
          }
        }
        else{
          this.regErrors.push("Email already been used");
        }
      }
      else{
        this.user = new User();
        this._router.navigate(['browse']);
      }
    });
  }

  login(){
    this.logErrors = false;
    this._apiService.login(this.loginInfo).then(result=>{
      if(result == true){
        this._router.navigate(['browse']);
      }
      else
        this.logErrors = true;
    })
    
  }

  getRandomBike(){
    this._apiService.getRandomBike().then(result=>{
      this.randBike = result;
    })
  }
}
