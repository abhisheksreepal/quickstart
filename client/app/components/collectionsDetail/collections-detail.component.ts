import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Params ,Router}   from '@angular/router';
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
  runs: Number[];
  selectedRun: number;
  collection: string;
 
  constructor(
  private route: ActivatedRoute,
  private location: Location,
  private collectionsService: CollectionsService ,
  private router: Router
) {
  super();
}

ngOnInit(): void {

  this.route.params.subscribe( params =>
        {
      this.collection =params['name'];
      this.collectionsService.getRuns(params['name']).subscribe(collections => 
    {
      this.ready();
      this.runs = collections.reverse();
      }
    );
        }
  )

  
    
}

goBack(): void {
  this.location.back();
}

 onSelect(run: number): void {
  this.selectedRun = run;
    
}


}
