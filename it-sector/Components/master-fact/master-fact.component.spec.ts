import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFactComponent } from './master-fact.component';

describe('MasterFactComponent', () => {
  let component: MasterFactComponent;
  let fixture: ComponentFixture<MasterFactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterFactComponent]
    });
    fixture = TestBed.createComponent(MasterFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
