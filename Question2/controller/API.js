const SearchModel=require("../models/Search");
const DetailModel=require("../models/Detail");
const axios=require("axios");

class API {

    static APISearch(req,res,next){
        const {keyword,page}=req.query;
        axios({
            url:`https://www.omdbapi.com/?apikey=faf7e5bb`,
            method:"GET",
            params:{
                s:keyword,
                page:page
            }
        }).then(async({data})=>{
            if(data&&data.Response){
                await SearchModel.create({
                    keyword,
                    total_result:data.Search.length
                });
                res.status(200).json({
                    message:`Search Successfull, ${data.Search.length} Pages found`,
                    data:data.Search 
                });
            }else{
                throw new Error(data.Error);
            }
        }).catch(next);
    }

    static APIDetail(req,res,next){
        const {keyword}=req.query;
        axios({
            url:`https://www.omdbapi.com/?apikey=faf7e5bb`,
            method:"GET",
            params:{
                t:keyword,
            }
        }).then(async({data})=>{
            if(data&&data.Response){
                await DetailModel.create({
                    title:data.Title,
                    type:data.Type,
                    imdb_id:data.imdbID,
                    url_link:`https://www.omdbapi.com/?apikey=faf7e5bb&s&i=${data.imdbID}`
                });
                res.status(200).json({
                    message:`Successfull`,
                    details:data
                });
            }else{
                throw new Error(data.Error);
            }
        }).catch(next);
    }

}

module.exports=API;