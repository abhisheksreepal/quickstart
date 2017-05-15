import { Component, Input, OnChanges } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {CollectionsService} from '../../services/collections.service';
import { Collection } from '../../models/Collections';
import {LoadingPage} from '../../models/loadingPage';



@Component({
  selector: 'run-info-table',
  templateUrl: './run-info-table.component.html',
  styleUrls: [ './run-info-table.component.css' ]
})
export class RunInfoTableComponent extends LoadingPage implements OnChanges {
    selectedRunInfo: any = undefined;
   @Input() selectedRun: number;
   @Input() collection: string;
   @Input() showDetails: boolean = true;

   labels: string[];
   data: number[];
   colors: any[];
 
  constructor(
    private collectionsService: CollectionsService ,
    private router: Router
) {
  super("active");
}

ngOnChanges(): void {
  if(this.collection && this.selectedRun){
    this.standby();
   this.collectionsService.getRunInfo(this.collection,this.selectedRun)
    .subscribe(info => 
    {
      this.ready();
      this.selectedRunInfo = info;
      this.labels = ['PASS % ','FAIL %'];
      let pass: number = this.selectedRunInfo.percentage;
      let fail = 100 - pass;
      this.data = [pass,fail];
      this.colors =  [
   { // first color
       backgroundColor: [ "#7FFF00","#FF0000"] 
   }
  ];
    });
  }

  
    
}



gotoDetail(): void {
  // Navigate tofeature Overview
  this.router.navigate(["/runOverview",this.collection,this.selectedRun.toString()]);
}




}
