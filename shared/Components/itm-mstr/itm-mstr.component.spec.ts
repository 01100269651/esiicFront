import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItmMstrComponent } from './itm-mstr.component';

describe('ItmMstrComponent', () => {
  let component: ItmMstrComponent;
  let fixture: ComponentFixture<ItmMstrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItmMstrComponent]
    });
    fixture = TestBed.createComponent(ItmMstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
