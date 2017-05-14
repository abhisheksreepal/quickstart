import { Component, Input, OnChanges } from '@angular/core';

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
 
  constructor(
    private collectionsService: CollectionsService 
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
    });
  }
    
}


}
