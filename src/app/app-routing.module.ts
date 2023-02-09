import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './secciones/error404/error404.component';
import { FabricantesComponent } from './secciones/fabricantes/fabricantes.component';
import { FavoritosComponent } from './secciones/favoritos/favoritos.component';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { VehiculosComponent } from './secciones/vehiculos/vehiculos.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'fabricantes', component: FabricantesComponent},
  { path: 'favoritos', component: FavoritosComponent},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
