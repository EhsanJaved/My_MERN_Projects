const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mainUserSchema = new Schema(
    {
        UserEmail:{type: String, Unique: true, required: true},
        UserName:{type: String, required: true},
        UserPassword:{type: String, required: true}
    }
)
const MainUser = new mongoose.model("Users", mainUserSchema);

module.exports = MainUser