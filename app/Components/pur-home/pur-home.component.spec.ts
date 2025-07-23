import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurHomeComponent } from './pur-home.component';

describe('PurHomeComponent', () => {
  let component: PurHomeComponent;
  let fixture: ComponentFixture<PurHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurHomeComponent]
    });
    fixture = TestBed.createComponent(PurHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
