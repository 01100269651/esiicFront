import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqrItmNoOrNameComponent } from './inqr-itm-no-or-name.component';

describe('InqrItmNoOrNameComponent', () => {
  let component: InqrItmNoOrNameComponent;
  let fixture: ComponentFixture<InqrItmNoOrNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InqrItmNoOrNameComponent]
    });
    fixture = TestBed.createComponent(InqrItmNoOrNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
