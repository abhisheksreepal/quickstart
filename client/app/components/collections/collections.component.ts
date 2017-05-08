import { Component } from '@angular/core';
import { Collection } from '../../models/Collections';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CollectionsService} from '../../services/collections.service';
@Component({
  selector: 'my-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponents implements OnInit {

  selectedCollection: Collection ;
  collections: Collection[];

  constructor(private router: Router, private collectionService: CollectionsService) {

  }

  ngOnInit(): void {
    this.getCollections();
  }

  getCollections(): void {
    this.collectionService.getCollections().subscribe(
          collections => this.collections = collections,
          error => console.log("error -"+error));
    
  }

   onSelect(collection: Collection): void {
    this.selectedCollection = collection;
    this.router.navigate(["/collectionDetail",this.selectedCollection.name]);
}

 
}
