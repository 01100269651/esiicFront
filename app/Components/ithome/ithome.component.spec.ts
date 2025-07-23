import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITHomeComponent } from './ithome.component';

describe('ITHomeComponent', () => {
  let component: ITHomeComponent;
  let fixture: ComponentFixture<ITHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ITHomeComponent]
    });
    fixture = TestBed.createComponent(ITHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
