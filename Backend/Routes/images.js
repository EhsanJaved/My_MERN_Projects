const express = require('express');
const router = express.Router();
const hero = require('../Models/Hero.model')
const multer = require('multer')

router.route('/').get((req,res)=>{
    hero.find()
    .then(hero => res.json(hero))
    .catch(err=>res.status(400).json('Error:'+ err)); 
    
})

module.exports = router;