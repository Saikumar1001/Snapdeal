const {Schema,SchemaTypes} = require("mongoose");
const mongoose = require("mongoose");


const ItemSchema = new Schema({
    product: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref:"productsModal"
    },
    quantity: {
        type: SchemaTypes.Number,
        required: true,
    },
    
})

const CartSchema = new Schema({
    items: {
        type: {ItemSchema},
        required: false,
    },
    totalPrice: {
        type: SchemaTypes.Number,
        required: true,
    },
    totalquantity: {
        type: SchemaTypes.Number,
        required: true,
    },
    
})
module.exports = mongoose.model("cartModel",CartSchema);