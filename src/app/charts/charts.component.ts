import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  // Bar Chart Data
  barChartData = [
    {
      name: 'Series A',
      value: 100,
    },
    {
      name: 'Series B',
      value: 200,
    },
    {
      name: 'Series C',
      value: 150,
    },
    // Add more data here as needed
  ];

  // Pie Chart Data
  pieChartData = [
    {
      name: 'Series 1',
      value: 500,
    },
    {
      name: 'Series 2',
      value: 300,
    },
    {
      name: 'Series 3',
      value: 200,
    },
    // Add more data here as needed
  ];

   // Data for the line chart
  lineChartData = [
    {
      name: 'Series 1',
      series: this.generateRandomData(10),
    },
    {
      name: 'Series 2',
      series: this.generateRandomData(10),
    },
  ];

  generateRandomData(count: number): { name: string; value: number }[] {
    const data: { name: string; value: number }[] = [];
    for (let i = 1; i <= count; i++) {
      data.push({ name: `Label ${i}`, value: Math.floor(Math.random() * 100) });
    }
    return data;
  }

  gaugeChartData = [
    {
      "name": "Germany",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "United States",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "France",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "United Kingdom",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "Spain",
      "value": 33000,
      "extra": {
        "code": "es"
      }
    },
    {
      "name": "Italy",
      "value": 35800,
      "extra": {
        "code": "it"
      }
    }
  ]
  // Chart Configurations
  colorScheme = 'nightLights';
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'X Axis';
  yAxisLabel = 'Y Axis';
  showLabels = true;
  doughnut = false;
  explodeSlices = false;

  onSelect(event: any): void {
    // Handle bar chart selection event here
  }

  onPieSelect(event: any): void {
    // Handle pie chart selection event here
  }
}
