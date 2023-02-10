import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porFabricante'
})
export class PipeFabricantePipe implements PipeTransform {

  transform(coches: any[], fab: string): any[] {
    if (coches && coches.length && fab != "0" ) {
      return coches.filter( (c:any) => c.fabricante == fab )
    } else
      return coches;
  }

}
