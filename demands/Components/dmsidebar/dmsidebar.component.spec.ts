import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmsidebarComponent } from './dmsidebar.component';

describe('DmsidebarComponent', () => {
  let component: DmsidebarComponent;
  let fixture: ComponentFixture<DmsidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DmsidebarComponent]
    });
    fixture = TestBed.createComponent(DmsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
