import { Component,Input } from '@angular/core';


@Component({
  selector: 'pie-chart',
  templateUrl: './piechart.component.html'
})
export class PieChartComponent {
  // Pie
  @Input() public pieChartLabels:string[] = ['Pass %', 'Fail %'];
  @Input() public pieChartData:number[] =  [60, 40]
  public pieChartType:string = 'pie';

  public pieChartOptions = {
    maintainAspectRatio: false
  }
 
 @Input() public pieChartColors:Array<any> = [
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