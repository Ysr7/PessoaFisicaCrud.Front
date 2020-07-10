import { TestBed } from '@angular/core/testing';

import { PessoaFisicaService } from './pessoa-fisica.service';

describe('PessoaFisicaService', () => {
  let service: PessoaFisicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaFisicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
