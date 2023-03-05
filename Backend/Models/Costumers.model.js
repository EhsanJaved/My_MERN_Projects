const mongooes = require('mongoose');
const Schema = mongooes.Schema;

const customerSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
  });
  const costumers = new mongooes.model('custumers', customerSchema)

  module.exports = costumers