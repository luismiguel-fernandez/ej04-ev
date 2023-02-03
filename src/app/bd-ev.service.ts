import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdEvService {
  // private vehiculos:Array<any> = [
  //   {
  //     id:"1",
  //     text:null,
  //     nombre:"A3 Sportback e-tron",
  //     imagen:"assets/img/Audi_A3_Sportback_e-tron.jpg",
  //     precio:"38750",
  //     fabricante:"1",
  //     tecnologia:"3"
  //   },
  //   {id:"2",text:null,nombre:"Q7 e-tron quattro",imagen:"assets/img/Audi_Q7_e-tron_quattro.jpg",precio:"83970",fabricante:"1",tecnologia:"3"},
  //   {id:"3",text:null,nombre:"i3",imagen:"assets/img/BMW-i3-60Ah.jpg",precio:"35500",fabricante:"2",tecnologia:"1"},
  //   {id:"4",text:null,nombre:"Serie 2 iPerformance",imagen:"assets/img/BMW_225xe_iPerformance.jpg",precio:"39500",fabricante:"2",tecnologia:"3"}
  // ]

  // private fabricantes:Array<any> = [
  //   {id:"1",text:"Audi",imagen:"assets/img/audi.jpg"},
  //   {id:"2",text:"BMW",imagen:"assets/img/bmw.jpg"},
  //   {id:"3",text:"Citroën",imagen:"assets/img/citroen.jpg"},
  //   {id:"4",text:"Ford",imagen:"assets/img/ford.jpg"},
  //   {id:"5",text:"Honda",imagen:"assets/img/honda.jpg"},
  //   {id:"6",text:"Hyundai",imagen:"assets/img/hyundai.jpg"},
  //   {id:"7",text:"Jaguar",imagen:"assets/img/jaguar.jpg"},
  //   {id:"8",text:"Kia",imagen:"assets/img/kia.jpg"},
  //   {id:"9",text:"Lexus",imagen:"assets/img/lexus.jpg"},
  //   {id:"10",text:"Mercedes",imagen:"assets/img/mercedes.jpg"},
  //   {id:"11",text:"Mitsubishi",imagen:"assets/img/mitsubishi.jpg"},
  //   {id:"12",text:"Nissan",imagen:"assets/img/nissan.jpg"},
  //   {id:"13",text:"Peugeot",imagen:"assets/img/peugeout.jpg"},
  //   {id:"14",text:"Porsche",imagen:"assets/img/porsche.jpg"},
  //   {id:"15",text:"Renault",imagen:"assets/img/renault.jpg"},
  //   {id:"16",text:"Suzuki",imagen:"assets/img/suzuki.jpg"},
  //   {id:"17",text:"Tesla",imagen:"assets/img/tesla.jpg"},
  //   {id:"18",text:"Toyota",imagen:"assets/img/toyota.jpg"},
  //   {id:"19",text:"Volvo",imagen:"assets/img/volvo.jpg"},
  //   {id:"20",text:"Volkswagen",imagen:"assets/img/volkswagen.jpg"}
  // ]

  private vehiculos:any
  private fabricantes:any
  private urlBase:string = "http://localhost/DWEC/ev/search.php"

  constructor(private http:HttpClient) {
    this.http.get(this.urlBase + "?q=models").subscribe(
      (response:any) => {
        this.vehiculos = response
      }
    )
    this.http.get(this.urlBase + "?q=makers").subscribe(
      (response:any) => {
        this.fabricantes = response
      }
    )
  }

  getVehiculos():Array<any> {
    return this.vehiculos
  }
  getFabricantes():Array<any> {
    return this.fabricantes
  }
}
