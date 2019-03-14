import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'frs-funds-management',
  templateUrl: './funds-management.component.html',
  styleUrls: ['./funds-management.component.css']
})
export class FundsManagementComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // console.log(this.incomeForm.incomeAmount.valid);
  }
  
  incomeArr = [
    {
      id: 1,
      createTime: Date.now(),
      source: 'buy',
      amount: 22,
      description: 'hdhdh',
      operation: "hdh"
    },
    {
      id: 2,
      createTime: Date.now(), // 数据需要持久化
      source: 'buy',
      amount: 22,
      description: 'hdhdh',
      operation: "hdh"
    }
  ]

  getIncome() {
    return this.incomeArr;
  }

  incomeForm = this.fb.group({
    incomeSource: ['', [Validators.required]],
    incomeAmount: ['', [Validators.pattern('[0-9]*')]],
    incomeComment: ['']
  })

  addIncomeItem() {
    this.incomeArr.push({
      id: 1,
      createTime: Date.now(),
      source: this.incomeForm.value.incomeSource,
      amount: this.incomeForm.value.incomeAmount,
      description: this.incomeForm.value.incomeComment,
      operation: "hdh"
    }
    );
    console.log(this.incomeForm.controls.incomeAmount.valid); // 获取表单组中某个元素的有效性

    $('#myModal').modal('hide');
  }

  onSubmitIncomeForm() {
    console.log("onsubmit");
  }

  editIncomeItem(income) {
    this.incomeForm.controls.incomeSource.setValue(income.source);
    this.incomeForm.controls.incomeAmount.setValue(income.amount);
    this.incomeForm.controls.incomeComment.setValue(income.description);
  }

  deleteIncomeItem(income) {
    // todo
    // this.incomeArr.filter((ele) => {
    //   return ele.id != income.id;
    // })
    
  }

  clearModal() {
    this.incomeForm.controls.incomeSource.setValue('');
    this.incomeForm.controls.incomeAmount.setValue('');
    this.incomeForm.controls.incomeComment.setValue('');
  }

}
