import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// imports of materials
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

// imports services
import { IndicatorUFService } from 'src/services/indicator-uf/indicator-uf.service';
import { IndicatorAllService } from 'src/services/all-indicator/all-indicators.service';
import { IndicatorBitcoinService } from 'src/services/indicator-bitcoin/indicator-bitcoin.service';

// Components
import { FinancialIndicatorsComponent } from './financial-indicators/financial-indicators.component';
import { IndicatorBitcoinComponent } from './indicators/indicator-bitcoin/indicator-bitcoin.component';
import { IndicatorAllComponent } from './indicators/indicator-all/indicator-all.component';
import { IndicatorUFComponent } from './indicators/indicator-uf/indicator-uf.component';

// Another Modules
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    IndicatorUFComponent,
    IndicatorBitcoinComponent,
    FinancialIndicatorsComponent,
    IndicatorAllComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatDividerModule,
    ChartModule,
    HighchartsChartModule,
  ],
  providers: [IndicatorUFService, IndicatorBitcoinService, IndicatorAllService],
  bootstrap: [AppComponent],
})
export class AppModule {}
