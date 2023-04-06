import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalnostComponent } from './nacionalnost.component';

describe('NacionalnostComponent', () => {
  let component: NacionalnostComponent;
  let fixture: ComponentFixture<NacionalnostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacionalnostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalnostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
