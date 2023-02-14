import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porNombre'
})
export class PipeNombrePipe implements PipeTransform {

  transform(coches: any[], patron: string): any[] {
    //recorrer todos los coches proporcionados a la entrada
    //y comprobar si su nombre incluye el patron indicado
    return coches.filter( (coche:any) => coche.nombre.toLowerCase().includes(patron.toLowerCase()) )
  }

}
