import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //properties/variable
  aim = 'Your Perfect Banking Partner';
  account = ' Accocunt number here';
  //to hold user account number
  acno="";
  //to hold user password
  pswd = "";
  //data base
   //register - model
   loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })




   //constructor

//dependancy injection
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }
  //life cycle hook - angular
  ngOnInit(): void {
  }
  //user defined functions

  //login();
  login(){
    var acno = this.loginForm.value.acno;
    var pswd = this.loginForm.value.pswd;
    if(this.loginForm.valid){
       //calling login - dataService
     const result = this.ds.login(acno,pswd)
     if(result){
      alert('login successful')
      this.router.navigateByUrl('dashboard');
     }

    }else{
      alert('Invalid Form');
    }

    }

}
