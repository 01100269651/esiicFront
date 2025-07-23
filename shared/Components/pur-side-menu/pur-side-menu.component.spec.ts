import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurSideMenuComponent } from './pur-side-menu.component';

describe('PurSideMenuComponent', () => {
  let component: PurSideMenuComponent;
  let fixture: ComponentFixture<PurSideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurSideMenuComponent]
    });
    fixture = TestBed.createComponent(PurSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
