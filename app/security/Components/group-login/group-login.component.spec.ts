import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupLoginComponent } from './group-login.component';

describe('GroupLoginComponent', () => {
  let component: GroupLoginComponent;
  let fixture: ComponentFixture<GroupLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupLoginComponent]
    });
    fixture = TestBed.createComponent(GroupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
