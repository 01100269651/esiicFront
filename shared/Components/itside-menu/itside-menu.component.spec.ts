import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITSideMenuComponent } from './itside-menu.component';

describe('ITSideMenuComponent', () => {
  let component: ITSideMenuComponent;
  let fixture: ComponentFixture<ITSideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ITSideMenuComponent]
    });
    fixture = TestBed.createComponent(ITSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
