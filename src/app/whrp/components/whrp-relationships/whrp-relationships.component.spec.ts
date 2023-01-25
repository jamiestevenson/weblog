import 'jasmine';
import 'zone.js/dist/zone-testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhrpRelationshipsComponent } from './whrp-relationships.component';

describe('HomeComponent', () => {
  let component: WhrpRelationshipsComponent;
  let fixture: ComponentFixture<WhrpRelationshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhrpRelationshipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhrpRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
