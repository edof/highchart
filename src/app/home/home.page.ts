import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(Highcharts);

interface ExtendedPlotAreaOptions extends Highcharts.PlotAreaOptions {
  depth: number; marker: { enabled: false; }; states: { inactive: { enabled: false; }; };
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  Highcharts2: typeof Highcharts = Highcharts;
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions2: Highcharts.Options = {}
  chartOptions: Highcharts.Options = {}
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

    this.chartOptions =
     {
      chart: {
        type: 'area',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 30,
          depth: 200
        }
      },
      title: {
        text: 'RPM vs Speed'
      },
      // accessibility: {
      //   description: 'The chart is showing the shapes of three mountain ranges as three area line series laid out in 3D behind each other.',
      //   keyboardNavigation: {
      //     seriesNavigation: {
      //       mode: 'serialize'
      //     }
      //   }
      // },
      // lang: {
      //   accessibility: {
      //     axis: {
      //       xAxisDescriptionPlural: 'The chart has 3 unlabelled X axes, one for each series.'
      //     }
      //   }
      // },
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
      plotOptions: {
        area: {
          depth: 100,
          marker: {
            enabled: false
          },
          states: {
            inactive: {
              enabled: false
            }
          }
        } as ExtendedPlotAreaOptions
      },
      // tooltip: {
      //   valueSuffix: ' MAMSL'
      // },
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
        lineColor: 'rgb(180,90,50)',
        color: 'rgb(200,110,50)',
        fillColor: 'rgb(200,110,50)',
        type: 'area',

      }, {
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
        lineColor: 'rgb(120,160,180)',
        color: 'rgb(140,180,200)',
        fillColor: 'rgb(140,180,200)',
        type: 'area',
      }]
    };
  }


}
