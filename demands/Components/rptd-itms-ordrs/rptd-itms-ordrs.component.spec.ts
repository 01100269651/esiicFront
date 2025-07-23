import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptdItmsOrdrsComponent } from './rptd-itms-ordrs.component';

describe('RptdItmsOrdrsComponent', () => {
  let component: RptdItmsOrdrsComponent;
  let fixture: ComponentFixture<RptdItmsOrdrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RptdItmsOrdrsComponent]
    });
    fixture = TestBed.createComponent(RptdItmsOrdrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
