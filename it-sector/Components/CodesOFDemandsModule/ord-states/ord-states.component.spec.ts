import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdStatesComponent } from './ord-states.component';

describe('OrdStatesComponent', () => {
  let component: OrdStatesComponent;
  let fixture: ComponentFixture<OrdStatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdStatesComponent]
    });
    fixture = TestBed.createComponent(OrdStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
