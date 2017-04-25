

import  * as express from 'express';
import { MongoClient,Db, Collection} from 'mongodb';
import  * as config  from '../config';

const router = express.Router()

const rootPath = "/";
const collectionsPath = "/collections";
const listOfRuns = "/collections/:collectionId/runs";
const listOfRunsDocs = "/collections/:collectionId";

router.get(rootPath,function(req,res){
  res.redirect(collectionsPath);
})

router.get(collectionsPath, function (req, res) {
    let components: String[] =[];


  let mongoClient = new MongoClient();

   mongoClient.connect(
    config.mongoDBConnectionString
  ).then(( db ) =>{
      console.log(`Connected to DB successfully`);
      let out: String[] =[];
      db.collections().then((collections) => {
                    collections.forEach((collection) => {
                    console.log(`Collection Name - ${collection.collectionName}`);
                    out.push(collection.collectionName);
                  });
                  db.close();
                  res.send(out) 
            })    

  }).catch((reason) => {
    res.status(500).send(reason);
  }) 
});


router.get(listOfRuns, function (req, res) {
    let components: String[] =[];


  let mongoClient = new MongoClient();

   mongoClient.connect(
    config.mongoDBConnectionString
  ).then(( db ) =>{
      console.log(`Connected to DB successfully`);
      db.collection(req.params.collectionId).distinct("runId",{},(err,data) => {
            console.log("Data - "+data);
            if(err){
                    res.send(500,`Something wrong ${err}`)
                }
            db.close();
            res.json(data);
        })    

  }).catch((reason) => {
    res.status(500).send(reason);
  }) 
});


router.get(listOfRunsDocs, function (req, res) {
    let components: String[] =[];


  let mongoClient = new MongoClient();

   mongoClient.connect(
    config.mongoDBConnectionString
  ).then(( db ) =>{
      console.log(`Connected to DB successfully`);
      db.collection(req.params.collectionId).find(req.query).toArray((err,data) => {
                data.forEach((row) => {
                    console.log(`URI - `+row.uri);
                });
                if(err){
                    res.send(500,`Something wrong ${err}`)
                }
                db.close();
                res.json(data);         
    })  

  }).catch((reason) => {
    res.status(500).send(reason);
  }) 
});




export { router };