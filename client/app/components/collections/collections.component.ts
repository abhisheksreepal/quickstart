import { Component } from '@angular/core';
import { Collection } from '../../models/Collections';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CollectionsService} from '../../services/collections.service';
import {LoadingPage} from '../../models/loadingPage';
@Component({
  selector: 'my-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponents extends LoadingPage implements OnInit {

  selectedCollection: Collection ;
  collections: Collection[];

  constructor(private router: Router, private collectionService: CollectionsService) {
      super();
  }

  ngOnInit(): void {
    this.getCollections();
  }

  getCollections(): void {
    this.collectionService.getCollections().subscribe(
          collections => {this.ready();
            this.collections = collections.reverse();},
          error => {console.log("error -"+error);this.ready();});
    
  }

   onSelect(collection: Collection): void {
    this.selectedCollection = collection;
    this.router.navigate(["/collectionDetail",this.selectedCollection.name]);
}

 
}
