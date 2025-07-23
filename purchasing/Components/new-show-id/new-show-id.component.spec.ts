import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShowIdComponent } from './new-show-id.component';

describe('NewShowIdComponent', () => {
  let component: NewShowIdComponent;
  let fixture: ComponentFixture<NewShowIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewShowIdComponent]
    });
    fixture = TestBed.createComponent(NewShowIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
