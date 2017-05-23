import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {CollectionsService} from '../../services/collections.service';
import { Collection } from '../../models/Collections';
import {LoadingPage} from '../../models/loadingPage';



@Component({
  selector: 'featureOverview',
  templateUrl: './featureOverview.component.html',
  styleUrls: [ './featureOverview.component.css' ]
})
export class FeatureOverviewComponent extends LoadingPage implements OnInit {
   selectedRunInfo: any = undefined;
   selectedRun: number;
   collection: string;

   labels: string[];
   data: number[];
   colors: any[];

   featureInfo: {};

 
  constructor(
    private collectionsService: CollectionsService ,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
) {
  super();
}

ngOnInit(): void {
       this.route.params.subscribe( params =>
        {
          this.selectedRun = params['runId'];
          this.collection = params['collectionName'];
          this.collectionsService.getFeatureInfo(this.collection,this.selectedRun).subscribe( info => {
            this.featureInfo = info;
            this.ready();
          } )
        });
    }

    goBack(): void {
      this.location.back();
    }





}
