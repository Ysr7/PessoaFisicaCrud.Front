import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPessoaFisicaComponent } from './components/form-pessoa-fisica/form-pessoa-fisica.component';
import { HeaderComponent } from './components/header/header.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PessoaFisicaService } from './services/pessoa-fisica/pessoa-fisica.service';
import { ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [
    AppComponent,
    FormPessoaFisicaComponent,
    HeaderComponent,
    AppBarComponent,
    FormPessoaFisicaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [PessoaFisicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
