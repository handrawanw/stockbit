const express=require("express");
const Router=express.Router();

const API=require("./API");

Router.use(API);

module.exports=Router;