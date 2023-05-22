// must be updated while working on Costumers Page

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CostumerOrderSchema =new Schema({
    CostumerFName:{type: String, minLength: 4, requried: true},
    CostumerLName:{type: String, minLength: 4, requried: true},
    CostumerCell:{type:Number, requried: true},
    CostumerEmail:{type: String, unique: true, requried: true},
    CostumerAddress:{type: String, requried: true},
    CostumerPostalAddress:{type:Number, requried: true},
    CostumerOrder:[{
        name: {type: String, required: true,},
        number: {type: Number, required: true,}
      }]
},
{ 
    timestemps: true
})
const CostumerOrder = new mongoose.model("CostumersOrder", CostumerOrderSchema);
module.exports = CostumerOrder
