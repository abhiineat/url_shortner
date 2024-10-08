const express=require('express');
const app=express();
const{connectToMongoDb}=require('./connection')
const urlRoute=require('./routes/url')
const PORT =8001;

connectToMongoDb("mongodb://localhost:27017/shortUrl").then(console.log("mongoDb connected"))
app.use(express.json()); 
app.use("/url",urlRoute)
app.listen(PORT,console.log(`server started at port ${PORT}`))