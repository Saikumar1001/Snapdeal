const express=require("express");
const {json,urlencoded} = require("express");
const mongoose=require("mongoose")
const dotenv= require("dotenv");
const paymentRouter = require("./routes/paymentRouter");
const addressRouter = require("./routes/addressRouter");
const cartRouter = require("./routes/cartRouter");
const couponRouter = require("./routes/couponRouter");
const ordersRouter = require("./routes/ordersRouter");
const productRouter = require("./routes/productRouter");
const rzpRouter = require("./routes/rzpRouter");
const userRouter = require("./routes/userRouter");
const auth = require("./middleware/auth")

dotenv.config()
const app = express()
    



const cors = require("cors")
const mongoUser = process.env.MONGO_USER
const mongoPass = process.env.MONGO_PASS
const mongoDb = process.env.MONGO_DB

const mongoUrl = "mongodb+srv://"+ mongoUser +":"+mongoPass +"@cluster0.7cm2wrx.mongodb.net/"+mongoDb+""

mongoose.connect(mongoUrl, (err) => {
    if (err) console.log(err);
    console.log("DB connected")
})
app.use(cors())
app.use(json());
app.use(urlencoded({extended:false}));
app.use(auth);



app.use("/products",productRouter);
app.use("/coupons",couponRouter);
app.use("/users",userRouter);
app.use("/rzp",rzpRouter);
app.use("/payment",paymentRouter);
app.use("/address",addressRouter)

app.listen(9000, () => console.log("server running at 9000 !!!"))