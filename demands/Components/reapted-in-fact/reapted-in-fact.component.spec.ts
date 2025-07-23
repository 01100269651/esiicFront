import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaptedInFactComponent } from './reapted-in-fact.component';

describe('ReaptedInFactComponent', () => {
  let component: ReaptedInFactComponent;
  let fixture: ComponentFixture<ReaptedInFactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReaptedInFactComponent]
    });
    fixture = TestBed.createComponent(ReaptedInFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
