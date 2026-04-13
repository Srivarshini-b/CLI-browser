const readline=require("readline");
const {fetchPageUrl}=require("./network/httpClient");
const {urlnormalization}=require("./utils/urlresolver");
 const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
 });

 rl.question("ENTER URL :: " ,async (input)=>{
    const url=urlnormalization(input);
    const html=await fetchPageUrl(url);
    if(html){
         console.log("\n=== RAW HTML (first 500 chars) ===\n");
        console.log(html.substring(0, 500));
    }
    rl.close();

 });