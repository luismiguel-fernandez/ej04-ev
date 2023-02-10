import { Component } from '@angular/core';
import { BdEvService } from 'src/app/bd-ev.service';
import { ParamsFiltrosService } from 'src/app/params-filtros.service';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styleUrls: ['./listado-vehiculos.component.css']
})
export class ListadoVehiculosComponent {
  constructor(private bd:BdEvService,
              private filtros:ParamsFiltrosService){
  }

  getVehiculos():Array<any> {
    return this.bd.getVehiculos()
  }

  getFabFilter() {
    return this.filtros.getFabFilter()
  }
}
