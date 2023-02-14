import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porTecnologia'
})
export class PipeTecnologiaPipe implements PipeTransform {

  transform(coches: any[], tec: string): any[] {
    if (coches && coches.length && tec != "0" ) {
      return coches.filter( (c:any) => c.tecnologia == tec )
    } else
      return coches;
  }

}
