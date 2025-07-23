import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagComponent } from './diag.component';

describe('DiagComponent', () => {
  let component: DiagComponent;
  let fixture: ComponentFixture<DiagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiagComponent]
    });
    fixture = TestBed.createComponent(DiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
