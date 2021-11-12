module.exports=(err,req,res,next)=>{
    let Message=err.message||"Internal Server Error";
    console.log("=============");
    console.log(err);
    console.log("=============");
    res.status(500).json({
        message:Message,
        status:500
    });
};