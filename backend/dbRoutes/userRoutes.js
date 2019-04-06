const express = require('express');
const mongoose = require('mongoose');
const Routes = express.Router();
const User = require('../dbModels/userSchema');

Routes.route('/').get((req, res) => {
  User.find((err, users) => {
      if(err) {
          console.log(err)
      } else {
          res.json(users);
      }
  })
})

Routes.route('/add').post((req, res) => {
    let user = new User(req.body);

    user.save()
    .then( user => {
        res.status(200).json({'user': 'user added successfully'})
    })
    .catch(err => {
        res.status(400).send('failed to add the user to the database');
    })
        
  })

  module.exports = Routes;