import { Component } from '@angular/core';
import { BdEvService } from 'src/app/bd-ev.service';
import { ParamsFiltrosService } from 'src/app/params-filtros.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent {
  constructor(private bd:BdEvService,
              private filtros:ParamsFiltrosService) {
  }
  getFabricantes() {return this.bd.getFabricantes()}
  getTecnologias() {return this.bd.getTecnologias()}
  setFabFilter(newFab:string) {this.filtros.setFabFilter(newFab)}
  setTecFilter(newTec:string) {this.filtros.setTecFilter(newTec)}
  setNombreFilter(newName:string) {this.filtros.setNombreFilter(newName)}
  setPrecioMinFilter(newMin:string) {this.filtros.setPrecioMinFilter(newMin)}
  setPrecioMaxFilter(newMax:string) {this.filtros.setPrecioMaxFilter(newMax)}
}
