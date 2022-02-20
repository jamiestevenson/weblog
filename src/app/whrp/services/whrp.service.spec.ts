import 'jasmine';
import 'zone.js/dist/zone-testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhrpService } from './whrp.service';

describe('PostService', () => {
  let service: WhrpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhrpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
