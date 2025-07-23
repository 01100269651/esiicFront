import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StkscalbckgrndComponent } from './stkscalbckgrnd.component';

describe('StkscalbckgrndComponent', () => {
  let component: StkscalbckgrndComponent;
  let fixture: ComponentFixture<StkscalbckgrndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StkscalbckgrndComponent]
    });
    fixture = TestBed.createComponent(StkscalbckgrndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
