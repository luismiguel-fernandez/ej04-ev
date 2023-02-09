import { Component } from '@angular/core';
import { FavsService } from 'src/app/favs.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  constructor(private favs:FavsService) {

  }

  getFavs() {
    return this.favs.getFavs()
  }
}
