import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemToMasterComponent } from './add-item-to-master.component';

describe('AddItemToMasterComponent', () => {
  let component: AddItemToMasterComponent;
  let fixture: ComponentFixture<AddItemToMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemToMasterComponent]
    });
    fixture = TestBed.createComponent(AddItemToMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
