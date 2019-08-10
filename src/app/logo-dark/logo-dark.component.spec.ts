import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDarkComponent } from './logo-dark.component';

describe('LogoDarkComponent', () => {
  let component: LogoDarkComponent;
  let fixture: ComponentFixture<LogoDarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoDarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
