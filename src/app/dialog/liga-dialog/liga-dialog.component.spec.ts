import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigaDialogComponent } from './liga-dialog.component';

describe('LigaDialogComponent', () => {
  let component: LigaDialogComponent;
  let fixture: ComponentFixture<LigaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
