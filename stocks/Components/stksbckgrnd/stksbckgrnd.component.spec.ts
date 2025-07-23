import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StksbckgrndComponent } from './stksbckgrnd.component';

describe('StksbckgrndComponent', () => {
  let component: StksbckgrndComponent;
  let fixture: ComponentFixture<StksbckgrndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StksbckgrndComponent]
    });
    fixture = TestBed.createComponent(StksbckgrndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
