import { Component } from '@angular/core';
import { BdEvService } from 'src/app/bd-ev.service';
import { FavsService } from 'src/app/favs.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  constructor(private favs:FavsService,
              private bdCoches:BdEvService) {
  }

  getFavs() {
    return this.favs.getFavs()
  }

  getCocheById(id:string) {
    return this.bdCoches.getCocheById(id)
  }
}
