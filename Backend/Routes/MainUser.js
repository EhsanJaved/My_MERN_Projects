const MainUser = require('../Models/MainUsers.model')
const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    MainUser.find()
      .then((User) => res.json(User))
      .catch((err) => res.json("error list", err));
  });

router.post('/login', async (req, res) => {
    const user = await MainUser.findOne({
      email: req.body.email,
      password: req.body.password 
  })
  if(!user){
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  res.json({ status: 'OK' });
});

router.post("/signup", (req, res)  => {
    const name = req.body.name;
    const password = req.body.password;
    const email = req.body.email;
  
    const NewUser = new MainUser({
      name,
      password,
      email,
    });
    NewUser.save()
      .then(() => {
        res.status(200).json({ message: "New User added" });
      })
      .catch((err) => res.status(400).json("Error:" + err));
  });

module.exports = router;