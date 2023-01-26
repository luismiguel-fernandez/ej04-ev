import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { VehiculosComponent } from './secciones/vehiculos/vehiculos.component';
import { FabricantesComponent } from './secciones/fabricantes/fabricantes.component';
import { Error404Component } from './secciones/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BarraNavComponent,
    InicioComponent,
    VehiculosComponent,
    FabricantesComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
