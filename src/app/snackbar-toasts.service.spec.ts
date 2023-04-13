import { TestBed } from '@angular/core/testing';

import { SnackbarToastsService } from './snackbar-toasts.service';

describe('SnackbarToastsService', () => {
  let service: SnackbarToastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackbarToastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
