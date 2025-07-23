import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumStoresComponent } from './sum-stores.component';

describe('SumStoresComponent', () => {
  let component: SumStoresComponent;
  let fixture: ComponentFixture<SumStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SumStoresComponent]
    });
    fixture = TestBed.createComponent(SumStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
