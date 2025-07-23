import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresInqrComponent } from './stores-inqr.component';

describe('StoresInqrComponent', () => {
  let component: StoresInqrComponent;
  let fixture: ComponentFixture<StoresInqrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoresInqrComponent]
    });
    fixture = TestBed.createComponent(StoresInqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
