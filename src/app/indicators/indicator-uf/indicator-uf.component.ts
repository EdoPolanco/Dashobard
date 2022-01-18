import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UFResponseModel } from 'src/models/uf-indicator/response/uf-response.model';
import { IndicatorUFService } from 'src/services/indicator-uf/indicator-uf.service';
import * as Highcharts from 'highcharts';
import { DialogComponent } from 'src/app/dialog/dialog.component';

@Component({
  selector: 'app-indicator-uf',
  templateUrl: './indicator-uf.component.html',
  styleUrls: ['./indicator-uf.component.css'],
})
export class IndicatorUFComponent implements OnInit {
  getUFResponse: UFResponseModel;
  dataSource = new MatTableDataSource<any>();
  series: Array<any> = [];
  categories: Array<any> = [];
  chartsOptions: any;
  highcharts = Highcharts;
  public showme: boolean;

  constructor(
    private _indicatorUFService: IndicatorUFService,
    public dialog: MatDialog
  ) {
    this.showme = false;
    this.getUFResponse = new UFResponseModel();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.dataSource,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit(): void {
    this.getIndicatorUF();
  }

  getIndicatorUF() {
    this.getUFResponse = new UFResponseModel();
    this._indicatorUFService.getIndicatorUF().subscribe((output) => {
      this.getUFResponse = output;
      if (this.getUFResponse.serie.length > 0) {
        this.dataSource = new MatTableDataSource<any>(this.getUFResponse.serie);
        this.loadOptions(this.getUFResponse.serie);
      } else {
        console.log('no se encontraron datos');
      }
    });
    return;
  }
  public show() {
    this.showme = true;
  }
  public hide() {
    this.showme = false;
  }
  loadOptions(data: any) {
    if (data.length > 0) {
      data.forEach((element: any) => {
        this.categories.push(new Date(element.fecha).toLocaleDateString());
        this.series.push(element.valor);
      });
    }
    this.categories.sort(
      (a, b) => new Date(b).getTime() - new Date(a).getTime()
    );
    this.series.sort((a, b) => b - a);

    this.chartsOptions = {
      title: {
        text: 'Indicador UF',
      },
      xAxis: {
        title: {
          text: 'Año UF',
        },
        categories: this.categories,
      },
      yAxis: {
        title: {
          text: 'Valor UF',
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
