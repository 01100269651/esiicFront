import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StksCalHomeComponent } from './stks-cal-home.component';

describe('StksCalHomeComponent', () => {
  let component: StksCalHomeComponent;
  let fixture: ComponentFixture<StksCalHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StksCalHomeComponent]
    });
    fixture = TestBed.createComponent(StksCalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
