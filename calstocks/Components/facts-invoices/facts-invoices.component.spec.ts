import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsInvoicesComponent } from './facts-invoices.component';

describe('FactsInvoicesComponent', () => {
  let component: FactsInvoicesComponent;
  let fixture: ComponentFixture<FactsInvoicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactsInvoicesComponent]
    });
    fixture = TestBed.createComponent(FactsInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
