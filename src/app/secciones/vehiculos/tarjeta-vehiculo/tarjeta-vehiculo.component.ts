import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-vehiculo',
  templateUrl: './tarjeta-vehiculo.component.html',
  styleUrls: ['./tarjeta-vehiculo.component.css']
})
export class TarjetaVehiculoComponent {
  @Input() vehiculo:any
}
