const mongose = require('mongoose'); //under construction
const Schema = mongose.Schema;

const iconsAndImages = new Schema(
    {
        description: {
            type: String
        },
        heroimage:{
            require: true,
            type: String   
        },
        state:{
            require: true,
            type: String
        }
    }
)

const Hero = new mongose.model("iconsAndImages",iconsAndImages);

module.exports = Hero;
// how to import image in mongoDB?