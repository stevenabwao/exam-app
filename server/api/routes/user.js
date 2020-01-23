const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User = require('../models/users')
const bcrypt = require('bcrypt')

router.post('/register', (req, res, next) =>{
    bcypt.hash(req.body.password, 10, (err,hash)=>{
        if(err){
            return res.status(500).json({
                error:err
            })
     
            }else{
                const user = new User({
                    __id: new mongoose.Schema.Types.ObjectId(),
                    email:req.body.email,  
                    password: hash
            
               }) 
               user.save()
               .then((result)=>{
                   console.log(result)
                   res.status(201).json({
                       message: "user created successfuly"
                   }
                   )
            })
               .catch( err =>{
                console.log(err)
                res.status(500).json({
                    error: err
               })
            }
     })
})


module.exports = router