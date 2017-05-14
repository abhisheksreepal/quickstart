import { Component } from '@angular/core';


@Component({
  selector: 'pie-chart',
  templateUrl: './piechart.component.html'
})
export class PieChartComponent {
  // Pie
  public pieChartLabels:string[] = ['Pass %', 'Fail %'];
  public pieChartData:number[] =  [60, 40]
  public pieChartType:string = 'pie';
 
 public pieChartColors:Array<any> = [
   { // first color
       backgroundColor: ["#5fc536", "#be2c54"] 
   }
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}