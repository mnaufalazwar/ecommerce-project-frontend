import { TestBed } from '@angular/core/testing';

import { FalazwarShopFormService } from './falazwar-shop-form.service';

describe('FalazwarShopFormService', () => {
  let service: FalazwarShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FalazwarShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
