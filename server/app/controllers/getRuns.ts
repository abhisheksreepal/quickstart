
import { Express , Request, Response } from 'express';
import { Db , Collection} from  'mongodb'
import * as bodyParser from 'body-parser';

const runsPath: string = "/api/collections/:collectionId";
const allRuns: string = "/api/collections/:collectionId/runs";

export function runs(app: Express,db: Db){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.get(runsPath,function(req: Request,res: Response){
        if(req.params.runId){
            req.query.runId = Number(req.params.runId);
        }
        
        db.collection(req.params.collectionId).find(req.query).toArray((err,data) => {
                data.forEach((row) => {
                    console.log(`URI - `+row.uri);
                });
                if(err){
                    res.send(500,`Something wrong ${err}`)
                }
                res.json(data);         
    })
    });
}


export function getListOfRuns(app: Express,db: Db){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.get(allRuns,function(req: Request,res: Response){
        
        db.collection(req.params.collectionId).distinct("runId",{},(err,data) => {
            console.log("Data - "+data);
            if(err){
                    res.send(500,`Something wrong ${err}`)
                }
            res.json(data);
        })
    
    });
}
