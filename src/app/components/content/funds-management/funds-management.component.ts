import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'frs-funds-management',
  templateUrl: './funds-management.component.html',
  styleUrls: ['./funds-management.component.css']
})
export class FundsManagementComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  income = {
    id: 1,
    createTime: Date.now(),
    source: 'buy',
    amount: 22,
    description: 'hdhdh',
    operation: "hdh"
  }

  getIncome() {
    return [
      {
        id: 1,
        createTime: Date.now(),
        source: 'buy',
        amount: 22,
        description: 'hdhdh',
        operation: "hdh"
      },
      {
        id: 1,
        createTime: Date.now(),
        source: 'buy',
        amount: 22,
        description: 'hdhdh',
        operation: "hdh"
      }
    ]
  }

  addIncomeItem() {

  }

  incomeForm = this.fb.group({
    incomeSource: [''],
    incomeAmount: [''],
    incomeComment: ['']
  })

  onSubmitIncomeForm() {
    console.log("onsubmit");
  }

}
