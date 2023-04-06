import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimDialogComponent } from './tim-dialog.component';

describe('TimDialogComponent', () => {
  let component: TimDialogComponent;
  let fixture: ComponentFixture<TimDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
