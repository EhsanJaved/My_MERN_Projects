const express = require('express');
const router = express.Router();
const hero = require('../Models/Hero.model')
const multer = require('multer')

// chat gpt
const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({ storage: storage });

  router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No image provided' });
    }
  
    // Create a new image instance
    const newImage = new Image({
      name: req.file.filename,
      data: req.file.path,
    });
  
    // Save the image to the database
    newImage.save((err, image) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Failed to save image to database' });
      }
      res.json({ message: 'Image uploaded successfully', image });
    });
  });



router.route('/').get((req,res)=>{
    hero.find()
    .then(hero => res.json(hero))
    .catch(err=>res.status(400).json('Error:'+ err)); 
    
})

module.exports = router;