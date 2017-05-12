
import * as express from 'express';
import { Express } from 'express';
import  * as config  from './app/config';
import { router as collections } from './app/routes/collectionsRoutes';

const app: Express = express();

const port: number =  process.env.port || config.applicationPort;

let originsWhitelist = [
  'http://localhost:8090'      //this is my front-end url for development
];
let corsOptions = {
  origin: function(origin: any, callback: any){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}

console.log("Dir name - "+__dirname)
app.use(express.static(__dirname + '/public'));


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Pass to next layer of middleware
    next();
});

app.use('/',collections);

let server = app.listen(port);


console.log(`Started running App on port ${port} `);