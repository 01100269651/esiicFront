import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMgmMenuComponent } from './top-mgm-menu.component';

describe('TopMgmMenuComponent', () => {
  let component: TopMgmMenuComponent;
  let fixture: ComponentFixture<TopMgmMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMgmMenuComponent]
    });
    fixture = TestBed.createComponent(TopMgmMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
