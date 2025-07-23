import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMMenuComponent } from './pmmenu.component';

describe('PMMenuComponent', () => {
  let component: PMMenuComponent;
  let fixture: ComponentFixture<PMMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PMMenuComponent]
    });
    fixture = TestBed.createComponent(PMMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
