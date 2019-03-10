import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestManagementComponent } from './invest-management.component';

describe('InvestManagementComponent', () => {
  let component: InvestManagementComponent;
  let fixture: ComponentFixture<InvestManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
