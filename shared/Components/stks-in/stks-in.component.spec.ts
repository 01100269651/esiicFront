import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StksInComponent } from './stks-in.component';

describe('StksInComponent', () => {
  let component: StksInComponent;
  let fixture: ComponentFixture<StksInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StksInComponent]
    });
    fixture = TestBed.createComponent(StksInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
