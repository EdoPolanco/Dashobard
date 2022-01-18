import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorBitcoinComponent } from './indicator-bitcoin.component';

describe('IndicatorBitcoinComponent', () => {
  let component: IndicatorBitcoinComponent;
  let fixture: ComponentFixture<IndicatorBitcoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorBitcoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
