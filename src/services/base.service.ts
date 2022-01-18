import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseService {
  public url: string;
  public headers: HttpHeaders;

  constructor() {
    this.url = environment.service;
    this.headers = new HttpHeaders();
  }

  get(http: HttpClient, service: string, request?: any): Observable<any> {
    //const header = { headers: this.headers };
    // const params = '?'+this.getParameters(request); -> this if you need more than one parameter
    return http.get(this.url + service /*params*/);
  }

  post(http: HttpClient, service: string, request: any): Observable<any> {
    //const o = { headers: this.headers };
    const o = '';
    return http.post(this.url + service, /*request*/ o);
  }

  private getParameters(request: any) {
    const result = Object.keys(request)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(request[k]))
      .join('&');
    return result;
  }
  // update(){

  // }
  // delete(){

  // }
}
