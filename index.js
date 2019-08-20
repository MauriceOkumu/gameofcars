const express = require('express');
const path = require('path');
const app = require('./backend/server')
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,'/dist')))

app.listen(PORT,()=> {
    console.log('process PORT =>',process.env.PORT)
    console.log(`Server is listening on port ${PORT}`);
})
