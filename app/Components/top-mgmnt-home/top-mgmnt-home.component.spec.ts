import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMgmntHomeComponent } from './top-mgmnt-home.component';

describe('TopMgmntHomeComponent', () => {
  let component: TopMgmntHomeComponent;
  let fixture: ComponentFixture<TopMgmntHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMgmntHomeComponent]
    });
    fixture = TestBed.createComponent(TopMgmntHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
