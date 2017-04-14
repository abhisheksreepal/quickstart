
import * as express from 'express';
import { Express } from 'express';
import  * as config  from './app/config';
import { MongoClient,Db } from 'mongodb';
import { collections } from './app/controllers/getCollections';
import { runs,getListOfRuns } from './app/controllers/getRuns';

const app: Express = express();

const port: number =  process.env.port || config.applicationPort;

let mongoClient = new MongoClient();
let self = this;
let db  = mongoClient.connect(config.mongoDBConnectionString,function(err,db: Db){
    if(err){
        throw Error("Something wrong connecting to mongo - "+err);
    }
    console.log("Connected to mongo successfully");
    
    self.db = db;
    collections(app,self.db);
    runs(app,db);
    getListOfRuns(app,db);
});

let server = app.listen(port);


console.log(`Started running App on port ${port} `);

process.on( 'SIGINT', function () {

   server.close(function () {
     console.log( "Closed out remaining connections.");
     self.db.close();
   });

   setTimeout( function () {
     console.error("Could not close connections in time, forcefully shutting down");
     process.exit(1); 
   }, 2*1000);

});