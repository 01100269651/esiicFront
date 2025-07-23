import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatSupplierComponent } from './creat-supplier.component';

describe('CreatSupplierComponent', () => {
  let component: CreatSupplierComponent;
  let fixture: ComponentFixture<CreatSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatSupplierComponent]
    });
    fixture = TestBed.createComponent(CreatSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
