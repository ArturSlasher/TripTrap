import { TestBed } from '@angular/core/testing';

import { TriptrapService } from './triptrap.service';

describe('TriptrapService', () => {
  let service: TriptrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriptrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
