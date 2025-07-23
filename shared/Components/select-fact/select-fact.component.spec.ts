import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFactComponent } from './select-fact.component';

describe('SelectFactComponent', () => {
  let component: SelectFactComponent;
  let fixture: ComponentFixture<SelectFactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectFactComponent]
    });
    fixture = TestBed.createComponent(SelectFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
