import { BaseService } from '../base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IndicatorUFService extends BaseService {
  private services = '/api/uf';

  constructor(private http: HttpClient) {
    super();
  }

  getIndicatorUF(): Observable<any> {
    return this.get(this.http, this.services, '');
  }
}
