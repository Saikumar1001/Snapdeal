const { Schema, SchemaTypes, model } = require("mongoose");

const paymentscheme = new Schema({
    userId: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: "userModel"
    },
    cartId: {
        type: SchemaTypes.ObjectId,
        required: true,
         ref: "cartModel"
    },
    paymentId: {
        type: SchemaTypes.String,
        required: true,
    },
    coupon: {
        type: SchemaTypes.String,
        required: true,
    },


})

module.exports = mongoose.model("paymentModel", paymentscheme);