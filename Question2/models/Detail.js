const {sequelize,datatypes}=require("../config/Sequelize");

const DetailModel=sequelize.define("details",{
    title:datatypes.STRING,
    type:datatypes.STRING,
    imdb_id:datatypes.STRING,
    url_link:datatypes.STRING
},{
    timestamps:false
});

module.exports=DetailModel;
