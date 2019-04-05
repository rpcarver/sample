import { TestBed } from '@angular/core/testing';

import { SampleApiService } from './sample-api.service';

describe('SampleApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleApiService = TestBed.get(SampleApiService);
    expect(service).toBeTruthy();
  });
});
