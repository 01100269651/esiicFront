import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDeptsComponent } from './main-depts.component';

describe('MainDeptsComponent', () => {
  let component: MainDeptsComponent;
  let fixture: ComponentFixture<MainDeptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDeptsComponent]
    });
    fixture = TestBed.createComponent(MainDeptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
