import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItMenuComponent } from './it-menu.component';

describe('ItMenuComponent', () => {
  let component: ItMenuComponent;
  let fixture: ComponentFixture<ItMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItMenuComponent]
    });
    fixture = TestBed.createComponent(ItMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
