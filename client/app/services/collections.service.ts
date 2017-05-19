import {Injectable} from '@angular/core';
import {Collection} from '../models/Collections';
import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class CollectionsService {

    private collectionsUrl = `http://10.5.9.123:8090/collections`;

    constructor(private http: Http){

    }
   
    getCollections(): Observable<Collection[]> {
        return this.http.get(this.collectionsUrl)
              .map(this.extractData)
              .retry(3)
              .catch(this.handleError);
    }


    getRuns(collection: String): Observable<Number[]> {
        return this.http.get(this.collectionsUrl+"/"+collection+"/runs")
              .map(this.extractRuns)
              .retry(3)
              .catch(this.handleError);
    }

     private extractRuns(res: Response) {
       let body = res.json();
       let collections: Number[] = [];
       console.log("BODY - "+body);
       body.forEach((element: number) => {
          console.log(`INserting  number to collection -- ${element}`)
           collections.push(element);

       });
      return collections || [];
  }

     private extractData(res: Response) {
       let body = res.json();
       let collections: Collection[] = [];
       console.log("BODY - "+body);
       body.forEach((element: string) => {
           let collection = new Collection()
           collection.name = element;
          console.log(`INserting  element to collection -- ${element}`)
           collections.push(collection);

       });
      return collections || [];
  }

  getRunInfo(collection: String,run: number): Observable<{}> {
        return this.http.get(this.collectionsUrl+"/"+collection+"/runs/"+run)
              .map(this.extractRunInfo)
              .retry(3)
              .catch(this.handleError);
    }

    private extractRunInfo(res: Response) {
       let body = res.json();
       
      return body || {};
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
