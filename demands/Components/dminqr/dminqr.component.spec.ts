import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMInqrComponent } from './dminqr.component';

describe('DMInqrComponent', () => {
  let component: DMInqrComponent;
  let fixture: ComponentFixture<DMInqrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DMInqrComponent]
    });
    fixture = TestBed.createComponent(DMInqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
