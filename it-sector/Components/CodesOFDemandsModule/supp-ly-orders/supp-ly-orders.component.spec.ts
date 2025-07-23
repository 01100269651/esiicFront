import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppLyOrdersComponent } from './supp-ly-orders.component';

describe('SuppLyOrdersComponent', () => {
  let component: SuppLyOrdersComponent;
  let fixture: ComponentFixture<SuppLyOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppLyOrdersComponent]
    });
    fixture = TestBed.createComponent(SuppLyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
