import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPDMstrComponent } from './updmstr.component';

describe('UPDMstrComponent', () => {
  let component: UPDMstrComponent;
  let fixture: ComponentFixture<UPDMstrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UPDMstrComponent]
    });
    fixture = TestBed.createComponent(UPDMstrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
