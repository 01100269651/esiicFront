import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMHomeComponent } from './dmhome.component';

describe('DMHomeComponent', () => {
  let component: DMHomeComponent;
  let fixture: ComponentFixture<DMHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DMHomeComponent]
    });
    fixture = TestBed.createComponent(DMHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
