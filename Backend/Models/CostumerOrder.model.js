// must be updated while working on Costumers Page

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CostumerOrderSchema =new Schema({
    CostumerName:{type: String, minLength: 4, requried: true},
    CostumerCell:{type:Number, requried: true},
    CostumerEmail:{type: String, unique: true, requried: true},
    CostumerAddress:{type: String, requried: true},
    CostumerPostalAddress:{type:Number, requried: true},
    CostumerOrder:{type: Array, requried: true}
},
{
    timestemps: true
})

const CostumerOrder = new mongoose.model("CostumersOrder", CostumerOrderSchema);

module.export = CostumerOrder