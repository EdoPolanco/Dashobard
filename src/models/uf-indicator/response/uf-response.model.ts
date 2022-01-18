export class UFResponseModel {
  version: number = 0;
  autor: string = '';
  codigo: string = '';
  nombre: string = '';
  unidad_medida: string = '';
  serie: Array<Series> = new Array<Series>();
}
export class Series {
  fecha: Date = new Date();
  valor: number = 0;
}
