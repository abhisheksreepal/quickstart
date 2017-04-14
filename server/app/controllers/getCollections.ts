
import { Express } from 'express';
import { Db } from  'mongodb'

const collectionPath: string = "/api/collections";


export function collections(app: Express,db: Db){

    app.get(collectionPath,function(req,res){
    let out: String[] =[];
        db.collections().then((collections) => {
                    collections.forEach((collection) => {
                    console.log(`Collection Name - ${collection.collectionName}`);
                    out.push(collection.collectionName);
                    });
                    res.send(out) 
            })
        })
    
}