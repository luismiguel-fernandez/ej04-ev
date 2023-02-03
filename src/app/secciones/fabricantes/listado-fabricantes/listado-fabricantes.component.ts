import { Component } from '@angular/core';
import { BdEvService } from 'src/app/bd-ev.service';

@Component({
  selector: 'app-listado-fabricantes',
  templateUrl: './listado-fabricantes.component.html',
  styleUrls: ['./listado-fabricantes.component.css']
})
export class ListadoFabricantesComponent {
  constructor(private bd:BdEvService){
  }
  getFabricantes():Array<any> {
    return this.bd.getFabricantes()
  }
}
