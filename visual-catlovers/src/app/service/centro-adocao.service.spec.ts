import { TestBed } from '@angular/core/testing';

import { CentroAdocaoService } from './centro-adocao.service';

describe('CentroAdocaoService', () => {
  let service: CentroAdocaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroAdocaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
