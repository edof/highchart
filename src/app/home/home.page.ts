import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  Highcharts2: typeof Highcharts = Highcharts;
  chartOptions2: Highcharts.Options = {}
  constructor() {}

  ngOnInit(): void {
    this.chartOptions2 = {
      xAxis: {
        categories: [
          "01:02",
          "01:05",
          "01:09",
          "01:16",
          "01:18",
          "01:18",
          "01:08",
          "01:11",
          "01:17",
          "01:20",

      ]
      },
      yAxis: [{ //--- Primary yAxis
        title: {
            text: 'RPM'
        }
      }, { //--- Secondary yAxis
        title: {
            text: 'Speed'
        },
        opposite: true
      }],
      series: [{
        yAxis: 0,
        name: 'RPM',
        data: [
          1264,
          1009,
          754,
          840,
          1163,
          929,
          1036,
          1103,
          1205,
          1217,

      ],
        type: 'line'
      },
      {
        yAxis: 1,
        name: 'Speed',
        data: [
          38,
          30,
          22,
          25,
          47,
          37,
          31,
          33,
          49,
          49,

      ],
        type: 'line'
      }]
    };
  }

}
