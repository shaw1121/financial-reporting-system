import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsDataComponent } from './funds-data.component';

describe('FundsDataComponent', () => {
  let component: FundsDataComponent;
  let fixture: ComponentFixture<FundsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
