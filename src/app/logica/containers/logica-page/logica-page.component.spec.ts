import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicaPageComponent } from './logica-page.component';

describe('LogicaPageComponent', () => {
  let component: LogicaPageComponent;
  let fixture: ComponentFixture<LogicaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
