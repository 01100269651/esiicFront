import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchbkgrComponent } from './purchbkgr.component';

describe('PurchbkgrComponent', () => {
  let component: PurchbkgrComponent;
  let fixture: ComponentFixture<PurchbkgrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchbkgrComponent]
    });
    fixture = TestBed.createComponent(PurchbkgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
