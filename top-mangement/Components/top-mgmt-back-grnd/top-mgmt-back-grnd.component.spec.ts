import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMgmtBackGrndComponent } from './top-mgmt-back-grnd.component';

describe('TopMgmtBackGrndComponent', () => {
  let component: TopMgmtBackGrndComponent;
  let fixture: ComponentFixture<TopMgmtBackGrndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMgmtBackGrndComponent]
    });
    fixture = TestBed.createComponent(TopMgmtBackGrndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
