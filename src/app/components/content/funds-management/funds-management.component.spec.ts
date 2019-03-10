import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsManagementComponent } from './funds-management.component';

describe('FundsManagementComponent', () => {
  let component: FundsManagementComponent;
  let fixture: ComponentFixture<FundsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
