import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkgrndComponent } from './bkgrnd.component';

describe('BkgrndComponent', () => {
  let component: BkgrndComponent;
  let fixture: ComponentFixture<BkgrndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BkgrndComponent]
    });
    fixture = TestBed.createComponent(BkgrndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
