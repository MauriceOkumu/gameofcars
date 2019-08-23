require = require('esm')(module)
import express from 'express'
import path from 'path'
import  app  from './backend/server'
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,'/dist')))

if(process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname, 'dist', 'index.html'))
    })
}

app.listen(PORT,()=> {
    console.log('process PORT =>',process.env.PORT)
    console.log(`Server is listening on port ${PORT}`);
})

//Dev start script "start": "webpack-dev-server --config webpack.dev.config.js --mode development --open",
//When running, do " nodemon -r esm".
//Drag and drop the stats.json her -> https://webpack.jakoblind.no/optimize/