const express = require('express');
const router = express.Router();
const products = require('../Models/Products.model');

router.route('/').get((req,res)=>{
    products.find()
    .then(products => res.json(products))
    .catch(err=>res.status(400).json('Error:'+ err));
    
})
const pipeline =[
    {
        $group: {
            _id: null,
            totalSold: { $sum: "$sold" },
            totalInstock: { $sum: "$instock" }
        }
    }
]
router.route('/total_productsQuentity').get((req,res)=>{
    products.aggregate(pipeline)

    .then(products => res.json(products))
    .catch(err=>res.status(400).json('Error:'+ err));
    
})
router.route('/add').post((req,res)=>{
    const prductname = req.body.prductname;
    const costprice = Number(req.body.costprice);
    const sellprice = Number(req.body.sellprice);
    const sold = Number(req.body.sold);
    const instock = Number(req.body.instock);
    
    const newProduct = new products ({
        prductname,
        costprice, 
        sellprice,
        sold,
        instock
    });
    newProduct.save()
        .then(()=> res.json('Product added!'))
        .catch(err=> res.status(400).json('Error:'+err));
    });


module.exports = router;