import { TestBed } from '@angular/core/testing';

import { DecorationServicesService } from './decoration-services.service';

describe('DecorationServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DecorationServicesService = TestBed.get(DecorationServicesService);
    expect(service).toBeTruthy();
  });
});
