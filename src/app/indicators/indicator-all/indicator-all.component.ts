import { Component, OnInit } from '@angular/core';
import { AllIndicatorResponseModel } from 'src/models/all-indicators/response/all-indicator-response.model';
import { IndicatorAllService } from 'src/services/all-indicator/all-indicators.service';

@Component({
  selector: 'app-indicator-all',
  templateUrl: './indicator-all.component.html',
  styleUrls: ['./indicator-all.component.css'],
})
export class IndicatorAllComponent implements OnInit {
  _getAllIndicatorsResponse: AllIndicatorResponseModel =
    new AllIndicatorResponseModel();
  ListIndicators: Array<any> = [];
  constructor(private _indicatorBitcoinService: IndicatorAllService) {}

  ngOnInit(): void {
    this.getIndicators();
  }

  getIndicators() {
    this._getAllIndicatorsResponse = new AllIndicatorResponseModel();

    this._indicatorBitcoinService.getAllIndicators().subscribe((output) => {
      this._getAllIndicatorsResponse = output;
      this.ListIndicators.push(this._getAllIndicatorsResponse.bitcoin);
      this.ListIndicators.push(this._getAllIndicatorsResponse.dolar);
      this.ListIndicators.push(this._getAllIndicatorsResponse.euro);
      this.ListIndicators.push(this._getAllIndicatorsResponse.uf);
      console.log(this.ListIndicators);
      // if (this._getBitcoinResponse.serie.length > 0) {
      //   this.ListIndicators = this.getBitcoinResponse.serie

      //   this.dataSource.paginator = this.paginator;
      //   this.loadOptions(this.getBitcoinResponse.serie);
      // } else {
      //   console.log('no se encontraron datos');
      // }
    });
  }
}
