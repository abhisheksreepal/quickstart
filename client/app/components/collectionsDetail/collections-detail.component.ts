import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {CollectionsService} from '../../services/collections.service';
import { Collection } from '../../models/Collections';
import {LoadingPage} from '../../models/loadingPage';



@Component({
  selector: 'collections-detail',
  templateUrl: './collections-detail.component.html',
  styleUrls: [ './collections-detail.component.css' ]
})
export class CollectionsDetailComponent extends LoadingPage implements OnInit {
    selectedRunInfo: {};
  runs: Number[];
  selectedRun: number;
 
  constructor(
  private route: ActivatedRoute,
  private location: Location,
  private collectionsService: CollectionsService 
) {
  super();
}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.collectionsService.getRuns(params['name']))
    .subscribe(collections => 
    {
      this.ready();
      this.runs = collections.reverse();
      }
    );
    
}

goBack(): void {
  this.location.back();
}

 onSelect(run: number): void {
  this.route.params
    .switchMap((params: Params) => this.collectionsService.getRunInfo(params['name'],run))
    .subscribe(info => this.selectedRunInfo = info);
  this.selectedRun = run;
    
}

}
