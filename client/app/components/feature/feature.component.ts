import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {CollectionsService} from '../../services/collections.service';
import { Collection } from '../../models/Collections';
import {LoadingPage} from '../../models/loadingPage';



@Component({
  selector: 'feature',
  templateUrl: './feature.component.html',
  styleUrls: [ './feature.component.css' ]
})
export class FeatureComponent extends LoadingPage implements OnInit {
   selectedRun: number;
   collection: string;
   featureName: string;

   featureInfo: {};
   feature = {};
  

 
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
          this.featureName = params['featureName'];
          this.collectionsService.getFeatureInfo(this.collection,this.selectedRun).subscribe( info => {
            
            let length  = info.length;
            while(length--){
              if(info[length]['name'] !== this.featureName){
                 info.splice(length,1);
              }
            }
            this.featureInfo = info;
            this.collectionsService.getFeature(this.collection,this.selectedRun,this.featureName).subscribe( info => {
            this.feature = info[this.featureName];
            console.log("Feature -- > "+JSON.stringify(this.feature))
            this.ready();
              } );
          } );
          
        });
    }

    goBack(): void {
      this.location.back();
    }


}
