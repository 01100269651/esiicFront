import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTransComponent } from './page-trans.component';

describe('PageTransComponent', () => {
  let component: PageTransComponent;
  let fixture: ComponentFixture<PageTransComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageTransComponent]
    });
    fixture = TestBed.createComponent(PageTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
