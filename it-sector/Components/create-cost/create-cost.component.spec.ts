import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCostComponent } from './create-cost.component';

describe('CreateCostComponent', () => {
  let component: CreateCostComponent;
  let fixture: ComponentFixture<CreateCostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCostComponent]
    });
    fixture = TestBed.createComponent(CreateCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
