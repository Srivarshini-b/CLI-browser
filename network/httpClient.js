
const axios=require('axios')
///make the function of fetchPageUrl(url)
//print the result
async function fetchPageUrl(url){
    try{
        const response=await axios.get(url);
        return response.data;

    }
    catch(err){
        console.log("Error fetching page:", err.message);
        return null;
    }

}
module.exports= {fetchPageUrl};
