import express from'express';
import mongoose from'mongoose';
import bodyParser from'body-parser';
import cors from'cors';
import dbConfig from'./db/db';
import Routes from'./dbRoutes/userRoutes';
import passport from'passport';


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use(passport.initialize());
require('./passport/passport')(passport)

mongoose.connect(dbConfig.DB,{
    useNewUrlParser: true
}).then (
    ()=> {
        console.log(`Connected to the database successfully`);
    },
    err => {
        console.log(`Cannot establish a database connection`);
    }
)

app.use('/users', Routes);

export default app