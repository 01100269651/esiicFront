import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldHistoryComponent } from './old-history.component';

describe('OldHistoryComponent', () => {
  let component: OldHistoryComponent;
  let fixture: ComponentFixture<OldHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldHistoryComponent]
    });
    fixture = TestBed.createComponent(OldHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
