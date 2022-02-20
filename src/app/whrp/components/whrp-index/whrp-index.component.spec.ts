import 'jasmine';
import 'zone.js/dist/zone-testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhrpIndexComponent } from './whrp-index.component';

describe('HomeComponent', () => {
  let component: WhrpIndexComponent;
  let fixture: ComponentFixture<WhrpIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhrpIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhrpIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
