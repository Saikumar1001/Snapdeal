const mongodb=require("mongodb");
const userModel=require("../model/userModel");
const {orderCollection}=require("../mongoDBConfig");

exports.get=async (data)=>{
    try {
        const {orderId}=data.params;
        const id=new mongodb.ObjectId(orderId);
        const order=await orderCollection.findOne({_id:id});
        return order;
    } catch (error) {
        return({err:error.message})
    }
}

exports.create=async (data)=>{
    try {
        const {body}=data;
        const order=await orderCollection.insertOne(body);
        const orderId=await order.Id;
         const updateUser=await userModel.findByIdAndUpdate(data.userId,{
            $push:{order:orderId}});
    } catch (error) {
        return({err:error.message})
    }
}



exports.update=async (data)=>{
    try {
        const {orderId}=data.params;
        const id=new mongodb.ObjectId(orderId);
        const order=await orderCollection.findOneAndUpdate({_id:id},{
            ...data.body});
        return order;
    } catch (error) {
        return({err:error.message})
    }
}

exports.getAll=async(data)=>{
    try {
        const order=await orderCollection.find({});
        return order;
    } catch (error) {
        return({err:error.message})
    }
}