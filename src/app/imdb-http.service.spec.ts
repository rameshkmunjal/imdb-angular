import { TestBed, inject } from '@angular/core/testing';

import { ImdbHttpService } from './imdb-http.service';

describe('ImdbHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImdbHttpService]
    });
  });

  it('should be created', inject([ImdbHttpService], (service: ImdbHttpService) => {
    expect(service).toBeTruthy();
  }));
});
