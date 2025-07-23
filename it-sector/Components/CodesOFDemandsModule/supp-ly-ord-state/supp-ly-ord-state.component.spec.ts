import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppLyOrdStateComponent } from './supp-ly-ord-state.component';

describe('SuppLyOrdStateComponent', () => {
  let component: SuppLyOrdStateComponent;
  let fixture: ComponentFixture<SuppLyOrdStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppLyOrdStateComponent]
    });
    fixture = TestBed.createComponent(SuppLyOrdStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
