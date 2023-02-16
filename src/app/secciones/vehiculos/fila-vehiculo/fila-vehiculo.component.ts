import { Component, Input } from '@angular/core';
import { FavsService } from 'src/app/favs.service';

@Component({
  selector: 'app-fila-vehiculo',
  templateUrl: './fila-vehiculo.component.html',
  styleUrls: ['./fila-vehiculo.component.css']
})
export class FilaVehiculoComponent {
  @Input() vehiculo:any

  constructor(private favs:FavsService) {

  }
  addFav(id:string){
    this.favs.addFav(id)
  }

  delFav(id:string){
    this.favs.delFav(id)
  }

  isFav(id:string) {
    return this.favs.isFav(id)
  }
}
