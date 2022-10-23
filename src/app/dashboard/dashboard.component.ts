import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

//login username
  user = ""
  //deposit - model
  depositForm = this.fb.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
   //deposit - model
   withdrawForm = this.fb.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
//acno to child
acno:any
lDate:any



  constructor(private fb:FormBuilder ,private ds:DataService,private router:Router) {
    this.user = this.ds.currentUsername;
    this.lDate  = new Date()
  }

  ngOnInit(): void {
    if(!localStorage.getItem('currentAcno')){
      alert('please login')
      this.router.navigateByUrl('')


    }
  }
  deposit(){
    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount
    if(this.depositForm.valid){
      const result = this.ds.deposit(acno,pswd,amount)
   if(result){
    alert(`${amount} depositted successfully and new balance is ${result}`)
   }

    }else{
      alert('Invalid Form');
    }

  }
  withdraw(){
    var acno = this.withdrawForm.value.acno
    var pswd = this.withdrawForm.value.pswd
    var amount = this.withdrawForm.value.amount
    if(this.withdrawForm.valid){
      const result = this.ds.withdraw(acno,pswd,amount)
      if(result){
       alert(`${amount} debitted successfully and new balance is ${result}`)
      }

    }else{
      alert('invalid Form');
    }

  }

//logout
logout(){
  //remove login acno, username
  localStorage.removeItem('currentAcno')
  localStorage.removeItem('currentUsername')
  //navigate to login page
  this.router.navigateByUrl('')


}
//deleteparent()
deleteParent(){
  this.acno = JSON.parse(localStorage.getItem('currentAcno') || '')
}
//cancel()- to set acno as empthy
cancel(){
  this.acno = ""
}

}
