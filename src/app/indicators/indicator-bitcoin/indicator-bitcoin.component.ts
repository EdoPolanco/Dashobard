import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { BitcoinResponseModel } from 'src/models/bitcoin-indicator/response/bitcoin-response.model';
import { IndicatorBitcoinService } from 'src/services/indicator-bitcoin/indicator-bitcoin.service';
import * as Highcharts from 'highcharts';
import { DialogComponent } from 'src/app/dialog/dialog.component';
@Component({
  selector: 'app-indicator-bitcoin',
  templateUrl: './indicator-bitcoin.component.html',
  styleUrls: ['./indicator-bitcoin.component.css'],
})
export class IndicatorBitcoinComponent implements OnInit {
  getBitcoinResponse: BitcoinResponseModel;
  displayedColumns: string[] = ['fecha', 'valor'];
  dataSource = new MatTableDataSource<any>();
  series: Array<any> = [];
  categories: Array<any> = [];
  chartsOptions: any;
  pageSize: number = 5;
  page: number = 0;
  highcharts = Highcharts;
  public showme: boolean;

  constructor(
    private _indicatorBitcoinService: IndicatorBitcoinService,
    public dialog: MatDialog
  ) {
    this.showme = false;
    this.getBitcoinResponse = new BitcoinResponseModel();
    this.dataSource = new MatTableDataSource<BitcoinResponseModel>();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.dataSource,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit() {
    this.getIndicatorUF();
  }

  getIndicatorUF() {
    this.getBitcoinResponse = new BitcoinResponseModel();

    this._indicatorBitcoinService.getIndicatorBitcoin().subscribe((output) => {
      this.getBitcoinResponse = output;
      if (this.getBitcoinResponse.serie.length > 0) {
        this.dataSource = new MatTableDataSource<any>(
          this.getBitcoinResponse.serie
        );
        this.loadOptions(this.getBitcoinResponse.serie);
      } else {
        console.log('no se encontraron datos');
      }
    });
  }
  public show() {
    this.showme = true;
  }
  public hide() {
    this.showme = false;
  }
  loadOptions(data: any) {
    data.forEach((element: any) => {
      this.categories.push(new Date(element.fecha).toLocaleDateString());
      this.series.push(element.valor);
    });
    this.categories.sort(
      (a, b) => new Date(b).getTime() - new Date(a).getTime()
    );
    this.series.sort((a, b) => a - b);
    this.chartsOptions = {
      title: {
        text: 'Indicador Bitcoin',
      },
      xAxis: {
        title: {
          text: 'Periodo Bitcoin',
        },
        categories: this.categories,
      },
      yAxis: {
        title: {
          text: 'Valor Bitcoin',
        },
      },
      series: [
        {
          data: this.series,
          type: 'spline',
        },
      ],
    };
  }
}
