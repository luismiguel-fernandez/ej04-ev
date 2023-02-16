import { Component } from '@angular/core';
import { BdEvService } from 'src/app/bd-ev.service';
import { ParamsFiltrosService } from 'src/app/params-filtros.service';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styleUrls: ['./listado-vehiculos.component.css']
})
export class ListadoVehiculosComponent {
  private modoTarjeta:boolean = true

  constructor(private bd:BdEvService,
              private filtros:ParamsFiltrosService){
  }

  cambiarVista() {this.modoTarjeta = !this.modoTarjeta}
  estaEnModoTarjeta():boolean {return this.modoTarjeta}

  getVehiculos():Array<any> {return this.bd.getVehiculos()}
  getFabFilter() {return this.filtros.getFabFilter()}
  getTecFilter() {return this.filtros.getTecFilter()}
  getNombreFilter() {return this.filtros.getNombreFilter()}
  getPrecioMinFilter() {return this.filtros.getPrecioMinFilter()}
  getPrecioMaxFilter() {return this.filtros.getPrecioMaxFilter()}
}
