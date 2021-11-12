const {sequelize,datatypes}=require("../config/Sequelize");

const SearchModel=sequelize.define("searchs",{
    keyword:datatypes.STRING,
    total_result:datatypes.INTEGER,
},{
    timestamps:false
});

module.exports=SearchModel;
