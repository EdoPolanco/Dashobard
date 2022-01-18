export class AllIndicatorResponseModel {
  version: number = 0;
  autor: string = '';
  uf: Indicator = new Indicator();
  dolar: Indicator = new Indicator();
  euro: Indicator = new Indicator();
  bitcoin: Indicator = new Indicator();
}
export class Indicator {
  codigo: string = '';
  nombre: string = '';
  unidad_medida: string = '';
  fecha: Date = new Date();
  valor: number = 0;
}
