import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEsCO from '@angular/common/locales/es-CO';

import { MaterialModules } from './material.modules';

import { DatePipe } from '@angular/common';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { TokenComponent } from './components/token/token.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {
  ConvenioComponent,
  ModalFormularioConvenio,
} from './components/convenio/convenio.component';

registerLocaleData(localeEsCO, 'es-CO');

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    TokenComponent,
    NavbarComponent,
    ConvenioComponent,
    ModalFormularioConvenio,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModules,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ModalFormularioConvenio],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: LOCALE_ID, useValue: 'es-CO' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
