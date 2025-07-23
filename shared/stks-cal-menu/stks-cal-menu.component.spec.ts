import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StksCalMenuComponent } from './stks-cal-menu.component';

describe('StksCalMenuComponent', () => {
  let component: StksCalMenuComponent;
  let fixture: ComponentFixture<StksCalMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StksCalMenuComponent]
    });
    fixture = TestBed.createComponent(StksCalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
