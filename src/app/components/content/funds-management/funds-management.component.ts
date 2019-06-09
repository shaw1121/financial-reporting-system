import { IncomeService } from './../../../service/income.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'frs-funds-management',
  templateUrl: './funds-management.component.html',
  styleUrls: ['./funds-management.component.css']
})
export class FundsManagementComponent {

  incomeData;
  incomeTotal;
    
  constructor(private fb: FormBuilder, private incomeService: IncomeService) {
  }

  ngOnInit() {
    this.getIncome();
  }

  // ngDoCheck, ngAfterContentInit
  // ngAfterContentChecked(): 每当 Angular 完成被投影组件内容的变更检测之后调用。ngAfterContentInit() 和每次 ngDoCheck() 之后调用
  ngAfterContentChecked()  {
    // 放在 ngOninit 中不行，报 income 没有 reduce 方法的错误
    this.incomeTotal = this.incomeData.income.reduce((acc, cur, currentIndex, array) => 
      acc + cur.amount, 0
    );
    console.log(this.incomeTotal);
  }

  getIncome(): void {
    this.incomeService.getIncome()
        .subscribe(data => {
          console.log(data);
          this.incomeData = data;
        });
  }

  validatePattern = /^(\-|\+)?\d+(\.\d+)?$/;

  incomeForm = this.fb.group({
    incomeId: [0],
    incomeSource: ['', [Validators.required]],
    incomeAmount: ['', [
      Validators.pattern(this.validatePattern)
    ]],
    incomeComment: ['', [incomeCommentValidate(/null/g)]]
  })


  
  submitAddedIncomeItem(): void {

    this.incomeService.addIncome({
      createTime: Date.now(),
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
    this.incomeForm.controls.incomeId.setValue(income.id);
  }

  submitEditedIncomeItem(incomeForm) {
    
    console.log(incomeForm); // undefined
    let incomeObj = incomeForm.value;

    let updateData = {
      source: incomeObj.incomeSource,
      amount: incomeObj.incomeAmount,
      description: incomeObj.incomeComment,
      id: incomeObj.incomeId
    }

    this.incomeService.editIncome(updateData)
        .subscribe(updatedIncome => {

          const index = updatedIncome ? this.incomeData.income.findIndex(i => i.id == updatedIncome['id'] ) : -1;

          if (index > -1) {
            this.incomeData.income[index] = updatedIncome;
          }
        })

    $('#editModal').modal('hide');
  }

  clearModal() {
    this.incomeForm.controls.incomeSource.setValue('');
    this.incomeForm.controls.incomeAmount.setValue('');
    this.incomeForm.controls.incomeComment.setValue('');
  }

  deleteIncomeItem(income): void {

    let index = this.incomeData.income.indexOf(income);
    this.incomeData.income.splice(index, 1);

    // have bug use filter method
    // this.incomeData = this.incomeData.income.filter(i => i !== income);

    this.incomeService.deleteIncome({createTime: income.createTime})
        .subscribe( data => {
          console.log(`delete successfully ${data}`);
        });
  }
  
}

// 禁止某个正则表达式匹配的内容
export function incomeCommentValidate(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}