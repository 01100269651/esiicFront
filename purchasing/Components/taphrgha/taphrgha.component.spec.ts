import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaphrghaComponent } from './taphrgha.component';

describe('TaphrghaComponent', () => {
  let component: TaphrghaComponent;
  let fixture: ComponentFixture<TaphrghaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaphrghaComponent]
    });
    fixture = TestBed.createComponent(TaphrghaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
