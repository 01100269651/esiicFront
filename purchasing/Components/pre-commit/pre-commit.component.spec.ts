import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCommitComponent } from './pre-commit.component';

describe('PreCommitComponent', () => {
  let component: PreCommitComponent;
  let fixture: ComponentFixture<PreCommitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreCommitComponent]
    });
    fixture = TestBed.createComponent(PreCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
