import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RviewSideMenusComponent } from './rview-side-menus.component';

describe('RviewSideMenusComponent', () => {
  let component: RviewSideMenusComponent;
  let fixture: ComponentFixture<RviewSideMenusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RviewSideMenusComponent]
    });
    fixture = TestBed.createComponent(RviewSideMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
