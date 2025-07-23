import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCostAccComponent } from './creat-cost-acc.component';

describe('CreatCostAccComponent', () => {
  let component: CreatCostAccComponent;
  let fixture: ComponentFixture<CreatCostAccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatCostAccComponent]
    });
    fixture = TestBed.createComponent(CreatCostAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
