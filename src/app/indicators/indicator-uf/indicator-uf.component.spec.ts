import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorUFComponent } from './indicator-uf.component';

describe('IndicatorUFComponent', () => {
  let component: IndicatorUFComponent;
  let fixture: ComponentFixture<IndicatorUFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorUFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorUFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
