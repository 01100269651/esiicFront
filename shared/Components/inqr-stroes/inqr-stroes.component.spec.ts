import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqrStroesComponent } from './inqr-stroes.component';

describe('InqrStroesComponent', () => {
  let component: InqrStroesComponent;
  let fixture: ComponentFixture<InqrStroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InqrStroesComponent]
    });
    fixture = TestBed.createComponent(InqrStroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
