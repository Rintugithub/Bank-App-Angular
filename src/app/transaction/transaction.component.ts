import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  //login Acno
  acno:any
  //to hold transcation array
  transaction:any

  constructor(private ds:DataService) {
    //get login acno from data service
    this.acno = this.ds.currentAcno
    //get transaction array from data service
    this.transaction = this.ds.getTransaction(this.acno)
    console.log(this.transaction);

   }

  ngOnInit(): void {
  }


}
