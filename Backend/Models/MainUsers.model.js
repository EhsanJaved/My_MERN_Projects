const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mainUserSchema = new Schema(
    {
        email:{type: String, Unique: true, required: true},
        name:{type: String, required: true},
        password:{type: String, required: true}
    }
)
const MainUser = new mongoose.model("main", mainUserSchema);

module.exports = MainUser