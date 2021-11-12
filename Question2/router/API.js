const express=require("express");
const Router=express.Router();

const {APISearch,APIDetail}=require("../controller/API");

Router.get("/search",APISearch);
Router.get("/detail",APIDetail);


module.exports=Router;