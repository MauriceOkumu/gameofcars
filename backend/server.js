const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./db/db');
const Routes = require('./dbRoutes/userRoutes');
const passport = require('passport');


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


const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=> {
    res.send({message:"Connected"});
})

app.use('/users', Routes);

app.listen(PORT,()=> {
    console.log(`Server is listening on port ${PORT}`);
})