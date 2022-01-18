import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialIndicatorsComponent } from './financial-indicators.component';

describe('FinancialIndicatorsComponent', () => {
  let component: FinancialIndicatorsComponent;
  let fixture: ComponentFixture<FinancialIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialIndicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
