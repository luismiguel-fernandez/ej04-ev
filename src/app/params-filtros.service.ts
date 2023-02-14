import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsFiltrosService {
  private fab:string = "0"
  private tec:string = "0"
  private nombre:string = ""
  private precioMin:string = "0"
  private precioMax:string = "99999999"

  constructor() { }

  getFabFilter() {return this.fab}
  getTecFilter() {return this.tec}
  getNombreFilter() {return this.nombre}
  getPrecioMinFilter() {return this.precioMin}
  getPrecioMaxFilter() {return this.precioMax}

  //SETTERS: habría que comprobar que los valores pasados son válidos
  setFabFilter(newFab:string) {this.fab = newFab}
  setTecFilter(newTec:string) {this.tec = newTec}
  setNombreFilter(newNombre:string) {this.nombre = newNombre}
  setPrecioMinFilter(newPrecioMin:string) {
    if (newPrecioMin == "")
      this.precioMin = "0"
    else
      this.precioMin = newPrecioMin
  }
  setPrecioMaxFilter(newPrecioMax:string) {
    if (newPrecioMax == "")
      this.precioMax = "99999999"
    else
      this.precioMax = newPrecioMax
  }
}
