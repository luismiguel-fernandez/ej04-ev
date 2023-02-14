import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porPrecio'
})
export class PipePrecioPipe implements PipeTransform {

  transform(coches: any[], pMin:string, pMax:string): any[] {
    let min:number = parseInt(pMin)
    let max:number = parseInt(pMax)
    console.log(min)
    console.log(max)
    if (coches && coches.length && min >= 0 && max >= 0 && max >= min) {
      console.log("max > min")
      return coches.filter((coche:any)=>parseInt(coche.precio) >= min && parseInt(coche.precio) <= max)
    } else
      return coches;
  }


}
