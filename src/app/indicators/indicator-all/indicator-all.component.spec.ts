import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorAllComponent } from './indicator-all.component';

describe('IndicatorAllComponent', () => {
  let component: IndicatorAllComponent;
  let fixture: ComponentFixture<IndicatorAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
