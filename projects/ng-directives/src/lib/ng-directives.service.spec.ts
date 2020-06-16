import { TestBed } from '@angular/core/testing';

import { NgDirectivesService } from './ng-directives.service';

describe('NgDirectivesService', () => {
  let service: NgDirectivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDirectivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
