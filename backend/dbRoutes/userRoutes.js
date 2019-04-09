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
    .then(user => {
        if(user) {
            return res.status(400).json({email: 'Email already exists'});
        } else {
          const user = new User(req.body)
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
                         res.status(400).send('failed to add the user to the database');
                      })
                    }
                  })
              }
          })
        }
    })

        
  });

  Routes.route('/login').post((req, res) => {
      const { errors, isValid } = validateLoginInputs(req.body);

      if(!isValid) {
          return res.status(400).json(errors);
      }
      const email = req.body.email;
      const password = req.body.password;

      User.findOne({
        email
    })
    .then(user => {
        if(!user) {
            errors.email = 'User email not found';
            return res.status(404).json(errors);
        } else {
         bcrypt.compare(password, user.password)
         .then(isMatch => {
             if(isMatch) {
                 const payload = {
                     id: user.id,
                     name: user.name

                 }
                 jwt.sign(payload, 'secret', {
                     expiresIn: 3600
                 },(err, token) => {
                     if(err) {
                         console.error('There was an error in the token =>',err)
                     } else {
                       res.json({
                           success: true,
                           token: `Bearer ${token}`
                       })
                     }
                 })
             } else {
                 errors.password = 'Incorrect password';
                 return res.status(400).json(errors);
             }
         })
        }
    })

 })

 Routes.route('/myself',).get(passport.authenticate('jwt',{session: false}), (req, res) => {
     return res.json({
         id: req.user.id,
         name: req.user.name,
         email: req.user.email
     })
 })

  module.exports = Routes;