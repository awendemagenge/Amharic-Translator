const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();
const wordRouter = require('./routes/word');

const cors = require('cors');

const url = process.env.DATABASE_ACCESS;
const client = new MongoClient(url, { useUnifiedTopology: true });



const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", function (req, res, next) {
    let connection;
    if (!connection) {
      client.connect(function (err, data) {
          if(err) {
              console.log("Error connecting to server")
          }else {
              console.log(data,"connect successfully");
          }
      
        connection = client.db("atlasDB");
        req.db = connection;
        next();
      });
    } else {
      req.db = connection;
      next();
    }
  });

app.use('/', wordRouter);
 

//boot up step
app.listen(process.env.PORT, function(){
    console.log('listening on  the port ', process.env.PORT,);
})
