import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StksHomeComponent } from './stks-home.component';

describe('StksHomeComponent', () => {
  let component: StksHomeComponent;
  let fixture: ComponentFixture<StksHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StksHomeComponent]
    });
    fixture = TestBed.createComponent(StksHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
