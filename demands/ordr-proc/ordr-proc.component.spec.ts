import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdrProcComponent } from './ordr-proc.component';

describe('OrdrProcComponent', () => {
  let component: OrdrProcComponent;
  let fixture: ComponentFixture<OrdrProcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdrProcComponent]
    });
    fixture = TestBed.createComponent(OrdrProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
