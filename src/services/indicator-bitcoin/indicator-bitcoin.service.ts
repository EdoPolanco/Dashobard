import { BaseService } from '../base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IndicatorBitcoinService extends BaseService {
  private services = '/api/bitcoin';

  constructor(private http: HttpClient) {
    super();
  }

  getIndicatorBitcoin(): Observable<any> {
    return this.get(this.http, this.services, '');
  }
}
