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
        });
    }

    goBack(): void {
      this.location.back();
    }





}
