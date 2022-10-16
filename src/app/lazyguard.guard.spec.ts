import { TestBed } from '@angular/core/testing';

import { LazyguardGuard } from './lazyguard.guard';

describe('LazyguardGuard', () => {
  let guard: LazyguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LazyguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
