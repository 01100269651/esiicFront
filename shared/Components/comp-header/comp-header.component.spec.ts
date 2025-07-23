import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHeaderComponent } from './comp-header.component';

describe('CompHeaderComponent', () => {
  let component: CompHeaderComponent;
  let fixture: ComponentFixture<CompHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompHeaderComponent]
    });
    fixture = TestBed.createComponent(CompHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
