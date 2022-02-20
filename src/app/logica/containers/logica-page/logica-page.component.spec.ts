import 'jasmine';
import 'zone.js/dist/zone-testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicaPageComponent } from './logica-page.component';
import { LogicaFacade } from '../../store/facade/facade';

describe('LogicaPageComponent', () => {
  let component: LogicaPageComponent;
  let fixture: ComponentFixture<LogicaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicaPageComponent ],
      providers: [
        {
          provide: LogicaFacade,
          useValue: {}
        }
      ]
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
