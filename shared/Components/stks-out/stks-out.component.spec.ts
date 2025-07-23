import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StksOutComponent } from './stks-out.component';

describe('StksOutComponent', () => {
  let component: StksOutComponent;
  let fixture: ComponentFixture<StksOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StksOutComponent]
    });
    fixture = TestBed.createComponent(StksOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
