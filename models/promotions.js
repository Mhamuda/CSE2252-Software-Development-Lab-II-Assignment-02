const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const promoSchema = new Schema({
    name : {type : String, require : true},
    image : {type : String, require : true},
    lebel : {type : String, require : true},
    price : {type : Number, require : true},
    description : {type : String, require : true},
    featured : {type : String, require : true}
},{
    timestamps: true
});

let Promotions = mongoose.model('Promotion', promoSchema);

module.exports = Promotions;
