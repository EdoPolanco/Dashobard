import { BaseService } from '../base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AllIndicatorResponseModel } from 'src/models/all-indicators/response/all-indicator-response.model';

@Injectable()
export class IndicatorAllService extends BaseService {
  private services = '/api';
  private _allIndicators: AllIndicatorResponseModel;

  constructor(private http: HttpClient) {
    super();
    this._allIndicators = new AllIndicatorResponseModel();
  }

  getAllIndicators(): Observable<any> {
    return this.get(this.http, this.services, '');
  }
}
