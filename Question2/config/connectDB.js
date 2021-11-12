const {sequelize}=require("./Sequelize");

(async()=>{
    try {
        await sequelize.authenticate();
        console.log('Terhubung ke Database');
        
    } catch (error) {
        console.log(error);
    }
})();
