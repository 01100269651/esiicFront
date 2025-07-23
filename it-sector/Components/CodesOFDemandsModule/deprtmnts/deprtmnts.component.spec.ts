import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeprtmntsComponent } from './deprtmnts.component';

describe('DeprtmntsComponent', () => {
  let component: DeprtmntsComponent;
  let fixture: ComponentFixture<DeprtmntsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeprtmntsComponent]
    });
    fixture = TestBed.createComponent(DeprtmntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
