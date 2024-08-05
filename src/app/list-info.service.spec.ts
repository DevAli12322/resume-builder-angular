import { TestBed } from '@angular/core/testing';

import { ListInfoService } from './list-info.service';

describe('ListInfoService', () => {
  let service: ListInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
