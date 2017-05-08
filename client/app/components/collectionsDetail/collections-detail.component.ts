import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {CollectionsService} from '../../services/collections.service';
import { Collection } from '../../models/Collections';



@Component({
  selector: 'collections-detail',
  templateUrl: './collections-detail.component.html',
  styleUrls: [ './collections-detail.component.css' ]
})
export class CollectionsDetailComponent implements OnInit {
    selectedRun: number;
  runs: Number[];
 
  constructor(
  private route: ActivatedRoute,
  private location: Location,
  private collectionsService: CollectionsService 
) {}

ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.collectionsService.getRuns(params['name']))
    .subscribe(collections => this.runs = collections);
    
}

goBack(): void {
  this.location.back();
}

 onSelect(run: number): void {
  this.selectedRun = run;
}

}
