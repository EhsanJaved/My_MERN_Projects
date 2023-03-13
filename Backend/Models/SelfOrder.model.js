const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SelfOrderSchema =new Schema({
    CostumerFirstName:{type: String, minLength: 2, requried: true},
    CostumerSecondName:{type: String, minLength: 2, requried: true},
    CostumerCell:{type:Number, requried: true},
    CostumerEmail:{type: String},
    CostumerAddress:{type: String},
    CostumerOrder:{type: Array, requried: true}
},{
timestemps: true
});

const SelfOrder = new mongoose.model("SelfOrder", SelfOrderSchema);

module.export = SelfOrder;