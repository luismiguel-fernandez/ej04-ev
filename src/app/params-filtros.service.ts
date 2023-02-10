import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsFiltrosService {
  private fab:string = "0"

  constructor() { }

  getFabFilter() {
    return this.fab
  }
  setFabFilter(newFab:string) {
    //habría que comprobar que newFab es un valor válido
    this.fab = newFab
    console.log(newFab)
  }
}
