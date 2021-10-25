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
app.use('/word', wordRouter);
 

//boot up step
app.listen(process.env.PORT, function(){
    console.log('listening on  the port ', process.env.PORT,);
})
