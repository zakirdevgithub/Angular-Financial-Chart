import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartModule, HiloSeriesService, DateTimeService, TooltipService, CrosshairService} from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [HiloSeriesService,DateTimeService, TooltipService, CrosshairService],
  bootstrap: [AppComponent]
})
export class AppModule { }
