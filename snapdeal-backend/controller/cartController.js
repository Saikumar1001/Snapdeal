const { cartCollection } = require("../mongoDBconfig")

const cartModel = require("../model/cartModal")
const userModel = require("../model/userModel")
const mongodb = require("mongodb")

exports.get = async (data) => {

    try {
        // const { cartId } = data.params;
        // const id = new mongodb.ObjectId(cartId);
        // const cart = await cartCollection.findOne({ _id: id });
        // return cart;
        const cart = cartModel.findbyId(data.params.cartId)
        return cart;
    } catch (error) {
        return ({ err: error.message })

    }

}



exports.deletecart = async (data) => {

    try {
        // const { cartId } = data.params;
        // const id = new mongodb.ObjectId(cartId);
        // const cart = await cartCollection.findOneAndDelete({ _id: id });
        // const updatedUser = await cartModel.findByIdAndUpdate(data.userId, {
        //     $pull: { cart: cartId }
        // })
        // return { msg: "address deleted" };
        const user = await cartModel.findByIdAndDelete(data.userId ,{

            cart: null
        })
        return user;

    } catch (error) {
        return ({ err: error.message })

    }


}

exports.createcart = async (data) => {

    try {
        const cart = cartModel.create(data.body);
        const cartId = await userModel.findByIdAndUpdate(userId, {

            cart: cart._id

        })
        return cartId
    } catch (error) {
        return ({ err: error.message })

    }


}


exports.updatecart = async (data) => {

    try {
        const { cartId } = data.params;
        const id = new mongodb.ObjectId(cartId);

        const cart = await cartCollection.findOneAndUpdate({ _id: id }, {
            ...data.body
        });
        return cart;

    } catch (error) {
        return ({ err: error.message })

    }


}


