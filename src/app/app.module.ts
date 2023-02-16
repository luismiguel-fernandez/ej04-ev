import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { VehiculosComponent } from './secciones/vehiculos/vehiculos.component';
import { FabricantesComponent } from './secciones/fabricantes/fabricantes.component';
import { Error404Component } from './secciones/error404/error404.component';
import { FiltrosComponent } from './secciones/vehiculos/filtros/filtros.component';
import { ListadoVehiculosComponent } from './secciones/vehiculos/listado-vehiculos/listado-vehiculos.component';
import { TarjetaVehiculoComponent } from './secciones/vehiculos/tarjeta-vehiculo/tarjeta-vehiculo.component';
import { ListadoFabricantesComponent } from './secciones/fabricantes/listado-fabricantes/listado-fabricantes.component';
import { TarjetaFabricanteComponent } from './secciones/fabricantes/tarjeta-fabricante/tarjeta-fabricante.component';
import { FavoritosComponent } from './secciones/favoritos/favoritos.component';
import { PipeFabricantePipe } from './pipes/pipe-fabricante.pipe';
import { PipeTecnologiaPipe } from './pipes/pipe-tecnologia.pipe';
import { PipeNombrePipe } from './pipes/pipe-nombre.pipe';
import { PipePrecioPipe } from './pipes/pipe-precio.pipe';
import { FilaVehiculoComponent } from './secciones/vehiculos/fila-vehiculo/fila-vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BarraNavComponent,
    InicioComponent,
    VehiculosComponent,
    FabricantesComponent,
    Error404Component,
    FiltrosComponent,
    ListadoVehiculosComponent,
    TarjetaVehiculoComponent,
    ListadoFabricantesComponent,
    TarjetaFabricanteComponent,
    FavoritosComponent,
    PipeFabricantePipe,
    PipeTecnologiaPipe,
    PipeNombrePipe,
    PipePrecioPipe,
    FilaVehiculoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
