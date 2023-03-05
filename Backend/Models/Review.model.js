const mongooes = require("mongoose");
const Schema = mongooes.Schema;

const reviewSchema = new Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    rating: { type: Number,maxLength: 5, required: true },
    comment: { type: String },
    created_at: { type: Date, default: Date.now },
  });