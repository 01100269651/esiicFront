import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreKindComponent } from './store-kind.component';

describe('StoreKindComponent', () => {
  let component: StoreKindComponent;
  let fixture: ComponentFixture<StoreKindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreKindComponent]
    });
    fixture = TestBed.createComponent(StoreKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
