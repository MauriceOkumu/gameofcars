const express = require('express');
const mongoose = require('mongoose');
const Routes = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../dbModels/userSchema');
const validateRegisterInputs = require('../validation/register');
const validateLoginInputs = require('../validation/login');

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
    const { errors, isValid } = validateRegisterInputs(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({
        email: req.body.email
    })
    .then(uuser => {
        if(uuser) {
            return res.status(400).json({email: 'Email already exists'});
        } else {
            console.log('********************* ', req.body)
          const user = new User(req.body)
          console.log('UUSSER => ', user)
          bcrypt.genSalt(10, (err, salt) => {
              if(err) {
                  console.error('There was an error ', err)
              } else {
                  bcrypt.hash(user.password, salt, (err, hash) => {
                    if(err) {
                        console.error('There was an error ', err)
                    } else {
                        user.password = hash;
                        user.save()
                        .then( user => {
                        res.status(200).json({'user': 'user added successfully'})
                        })
                        .catch(err => {
                            console.log(err)
                         res.status(400).send('failed to add the user to the database');
                      })
                    }
                  })
              }
          })
        }
    })

        
  })

  module.exports = Routes;