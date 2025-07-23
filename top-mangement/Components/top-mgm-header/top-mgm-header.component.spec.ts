import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMgmHeaderComponent } from './top-mgm-header.component';

describe('TopMgmHeaderComponent', () => {
  let component: TopMgmHeaderComponent;
  let fixture: ComponentFixture<TopMgmHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMgmHeaderComponent]
    });
    fixture = TestBed.createComponent(TopMgmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
