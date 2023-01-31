import { Component } from '@angular/core';
import { BdEvService } from 'src/app/bd-ev.service';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styleUrls: ['./listado-vehiculos.component.css']
})
export class ListadoVehiculosComponent {
  constructor(private bd:BdEvService){
  }

  getVehiculos():Array<any> {
    return this.bd.getVehiculos()
  }
}
