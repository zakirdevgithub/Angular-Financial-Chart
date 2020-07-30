import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data:Object[];
  public xAxis: Object;
  public chartTitle: string;
  public yAxis: Object;
  public tooltipSettings: Object;
  public crossSettings: Object;
  constructor(){
    this.chartTitle='Financial Analysis';
    this.tooltipSettings={
        enable: true
    };
    this.crossSettings={
      enable: true,
      lineType: 'Vertical'
    };
    this.xAxis={
      title: 'Date Time',
      valueType: 'DateTime',
      minimum: new Date('2015-12-31'),
      maximum: new Date('2017-09-30'),
      labelFormat: 'yMMMM',
      crosshairTooltip:{enable: true}
    };
    this.yAxis={
      title: 'Price in Dollar'
    };
    this.data=[
      {
        date: new Date('2016-01-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2016-01-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2016-01-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2016-01-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2016-02-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2016-02-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2016-02-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2016-02-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2016-03-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2016-03-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2016-03-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2016-03-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2016-04-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2016-04-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2016-04-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2016-04-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2016-05-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2016-05-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2016-05-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2016-06-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2016-07-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2016-07-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2016-07-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2016-07-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2016-08-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2016-08-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2016-08-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2016-08-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2016-09-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2016-09-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2016-09-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2016-09-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2016-10-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2016-10-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2016-10-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2016-10-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2016-11-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2016-11-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2016-11-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2016-11-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2016-12-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2016-12-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2016-12-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2016-12-25'),
        high:101.53,
        low: 92.39
      },

      {
        date: new Date('2017-01-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2017-01-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2017-01-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2017-01-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2017-02-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2017-02-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2017-02-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2017-02-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2017-03-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2017-03-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2017-03-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2017-03-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2017-04-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2017-04-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2017-04-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2017-04-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2017-05-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2017-05-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2017-05-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2017-06-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2017-07-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2017-07-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2017-07-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2017-07-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2017-08-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2017-08-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2017-08-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2017-08-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2017-09-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2017-09-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2017-09-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2017-09-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2017-10-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2017-10-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2017-10-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2017-10-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2017-11-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2017-11-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2017-11-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2017-11-25'),
        high:101.53,
        low: 92.39
      },
      {
        date: new Date('2017-12-04'),
        high:105.85,
        low: 96.43
      },
      {
        date: new Date('2017-12-11'),
        high:101.19,
        low: 95.36
      },
      {
        date: new Date('2017-12-18'),
        high:101.46,
        low: 93.42
      },
      {
        date: new Date('2017-12-25'),
        high:101.53,
        low: 92.39
      },

    ]
  }
}
