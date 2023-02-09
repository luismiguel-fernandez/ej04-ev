import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavsService {
  private coches:Array<string> = ["13","18","21"]

  constructor() { }

  addFav(id:string) {
    if (!this.coches.includes(id)) {
      this.coches.push(id)
      console.log(this.coches)
    }
  }

  getFavs():Array<string> {
    return this.coches
  }
}
