import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMMenuComponent } from './dmmenu.component';

describe('DMMenuComponent', () => {
  let component: DMMenuComponent;
  let fixture: ComponentFixture<DMMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DMMenuComponent]
    });
    fixture = TestBed.createComponent(DMMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
