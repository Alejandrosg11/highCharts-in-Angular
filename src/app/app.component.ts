import { Component, ElementRef, ViewChild } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular 5 & highChart Testing';

  @ViewChild('chartTarget') chartTarget: ElementRef;

  chart: Highcharts.ChartObject;
  ngAfterViewInit() {
    const options: Highcharts.Options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Best Programming Languages'
      },
      xAxis: {
        categories: ['GoLang', 'Javascript', 'Java']
      },
      yAxis: {
        title: {
          text: 'Best Performance'
        }
      },
      series: [{
        name: 'Javier',
        data: [1, 6, 7]
      }, {
        name: 'Jorge',
        data: [7, 6, 2]
      }, {
        name: 'otro dude',
        data: [3, 3, 7]
      }]
    };
  
    this.chart = chart(this.chartTarget.nativeElement, options);
  }

  addSeries(){
    this.chart.addSeries({
      name:'Balram',
      data:[2,3,7]
    })    
  }


}
