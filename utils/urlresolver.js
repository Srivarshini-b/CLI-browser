function urlnormalization(url){
    if(!url.startsWith("http")){
        return "https://"+url;
    }
    return url;
}
module.exports={urlnormalization};