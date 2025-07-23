import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmBckGrndComponent } from './dm-bck-grnd.component';

describe('DmBckGrndComponent', () => {
  let component: DmBckGrndComponent;
  let fixture: ComponentFixture<DmBckGrndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DmBckGrndComponent]
    });
    fixture = TestBed.createComponent(DmBckGrndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
