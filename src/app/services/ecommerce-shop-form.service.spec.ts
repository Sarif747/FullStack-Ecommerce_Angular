import { TestBed } from '@angular/core/testing';

import { EcommerceShopFormService } from './ecommerce-shop-form.service';

describe('EcommerceShopFormService', () => {
  let service: EcommerceShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
