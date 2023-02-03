import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-fabricante',
  templateUrl: './tarjeta-fabricante.component.html',
  styleUrls: ['./tarjeta-fabricante.component.css']
})
export class TarjetaFabricanteComponent {
  @Input() fabricante:any
}
