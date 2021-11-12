const express=require("express");
const app=express();

const PORT=process.env.PORT||2021;

// database connection
require("./config/connectDB");
// database connection

const Router=require("./router/index");
const errorHandler=require("./middleware/errHandler");

app.use(express.json({}));
app.use(express.urlencoded({extended:true}));
app.use("/api/v0",Router);
app.use(errorHandler);

app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`Server is running in ${PORT}`);
});
