import { Income } from './../../../model/income';
import { IncomeService } from './../../../service/income.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'frs-funds-management',
  templateUrl: './funds-management.component.html',
  styleUrls: ['./funds-management.component.css']
})
export class FundsManagementComponent {

  editedIncome = {
    id: 0,
    createTime: Date.now(),
    source: 'buy',
    amount: 22,
    description: 'hdhdh',
    operation: "hdh"
  };

  incomeData;
    
  constructor(private fb: FormBuilder, private incomeService: IncomeService) {
  }

  ngOnInit() {
    this.getIncome();
  }

  getIncome() {
    this.incomeService.getIncome()
        .subscribe(incomeData => {
          console.log(incomeData);
          this.incomeData = incomeData;
        });
  }

  incomeForm = this.fb.group({
    incomeId: [0],
    incomeSource: ['', [Validators.required]],
    incomeAmount: ['', [Validators.pattern('[0-9]*')]],
    incomeComment: ['']
  })
  
  submitAddedIncomeItem() {
    this.incomeService.addIncome({
      source: this.incomeForm.value.incomeSource,
      amount: this.incomeForm.value.incomeAmount,
      description: this.incomeForm.value.incomeComment
    }).subscribe(income => {
      this.incomeData.income.push(income);
      console.log(this.incomeData);
    })

    // 获取表单组中某个元素的有效性
    console.log(this.incomeForm.controls.incomeAmount.valid); 

    $('#myModal').modal('hide');

  }

  editIncomeItem(income) {
    this.incomeForm.controls.incomeSource.setValue(income.source);
    this.incomeForm.controls.incomeAmount.setValue(income.amount);
    this.incomeForm.controls.incomeComment.setValue(income.description);
  }

  submitEditedIncomeItem(incomeForm) {
    
    console.log(incomeForm); // undefined
    let incomeArr = this.incomeData.data;
    if (this.editedIncome == incomeArr[incomeForm.controls.incomeId.value]) {
      this.incomeData.data = this.incomeData.data.splice(incomeForm.controls.incomeId.value, 1, this.editedIncome);
      $('#editModal').modal('hide');

    } else {
      $('#editModal').modal('hide');
    }
  }

  clearModal() {
    this.incomeForm.controls.incomeSource.setValue('');
    this.incomeForm.controls.incomeAmount.setValue('');
    this.incomeForm.controls.incomeComment.setValue('');
  }

  deleteIncomeItem(income) {
    // have bug
    console.log(income);
    this.incomeData = this.incomeData.income.filter(i => i !== income);
    this.incomeService.deleteIncome({createTime: income.createTime})
        .subscribe();
  }
}
