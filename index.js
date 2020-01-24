require = require('esm')(module)
import express from 'express'
import path from 'path'
import  app  from './backend/server'
export const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,'/dist')))

if(process.env.NODE_ENV === 'production') {
    
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname +'/dist/index.html'))
    })
}

app.listen(PORT,()=> {
    console.log('process PORT =>',process.env.PORT)
    console.log(`Server is listening on port ${PORT}`);
})

//Dev start script "startDev": "webpack-dev-server --config webpack.dev.config.js --mode development --open",
//Deployment script "start": " node -r esm index.js"
//When running, do " nodemon -r esm".
//Add this to production script --profile --json > stats.json
//Drag and drop the stats.json here -> https://webpack.jakoblind.no/optimize/