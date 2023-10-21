import { Component, Input, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { Exchange } from '../exchanges.interface';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-exchange-card',
  templateUrl: './exchange-card.component.html',
  styleUrls: ['./exchange-card.component.scss'],
})

export class ExchangeCardComponent implements OnInit {
  @Input() stockExchanges: Array<Exchange>

  ngOnInit(): void {
    this.generateChart();
  }

  generateChart(): void {
    const options = {
      chart: {
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        clipMarkers: false,
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      series: [
        {
          name: 'Series 1',
          data: [45, 52, 38, 45, 19, 23, 2],
        },
      ],
      fill: {
        type: 'solid',
        opacity: 0.2,
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        categories: [
          '01 Jan',
          '02 Jan',
          '03 Jan',
          '04 Jan',
          '05 Jan',
          '06 Jan',
          '07 Jan',
        ],
      },
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);

    chart.render();
  }
}
