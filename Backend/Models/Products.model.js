const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema(
    {
        prductname:{type: String,unique: true, required: true},
        costprice:{type: Number},
        sellprice:{type: Number, required: true},
        sold:{type: Number, required: true},
        instock:{type: Number, required: true}
    },
    {
        timestamps: true,
    }
)
const Product = mongoose.model('Products', productsSchema);
 
module.exports = Product;
