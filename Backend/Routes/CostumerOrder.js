const express = require('express');
const router = express.Router();
const CostumerOrder = require('../Models/CostumerOrder.model');


router.route('/').post((req,res)=>{
    const Fname = req.body.customerDetails.Fname;
    const Lname = req.body.customerDetails.Lname;
    const number = Number(req.body.customerDetails.number);
    const email = req.body.customerDetails.email;
    const address = req.body.customerDetails.address;
    const ordername = req.body.customerDetails.order.name;
    const ordernumber = req.body.customerDetails.order.number;
    
    
    const bill = new CostumerOrder ({
        Fname,
        Lname, 
        number,
        email,
        address,
        ordername,
        ordernumber
    
        // Fname: req.body.Fname,
        // Lname: req.body.Lname,
        // number: req.body.number,
        // email: req.body.email,
        // address: req.body.address,
        // orders: req.body.order

    });
    bill.save()
            .then(()=> res.json('Product added!'))
            .catch(err=> res.status(400).json('Error:'+err));
})
    
    // router.route('/').post((req,res)=>{
    //     // send data to the server
    //     const customerDetails = req.body
    //     const bill = new CostumerOrder (customerDetails)
    //     bill.save()
    //         .then(()=> res.json('Product added!'))
    //         .catch(err=> res.status(400).json('Error:'+err));
    //     });
        // get data from server
        router.route('/customOrder').get((req,res)=>{
            CostumerOrder.find()
            .then(CostumerOrder => res.json(CostumerOrder))
            .catch(err=>req.status(400).json('Error:'+ err))
        })    
    



    module.exports = router

