import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPessoaFisicaComponent } from './form-pessoa-fisica.component';

describe('FormPessoaFisicaComponent', () => {
  let component: FormPessoaFisicaComponent;
  let fixture: ComponentFixture<FormPessoaFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPessoaFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
