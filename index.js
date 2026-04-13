const readline=require("readline");
const {fetchPageUrl}=require("./network/httpClient");
const {urlnormalization}=require("./utils/urlresolver");
const {parseHTML}=require("./parser/htmlparser")
 const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
 });

 rl.question("ENTER URL :: " ,async (input)=>{
    const url=urlnormalization(input);
    const html=await fetchPageUrl(url);
    /*if(html){
         console.log("\n=== RAW HTML (first 500 chars) ===\n");
        console.log(html.substring(0, 500));
        
    }*/
   const parsed=parseHTML(html);
   console.log("\n=== TEXT CONTENT ===\n");
    console.log(parsed.text.substring(0, 1000));

        console.log("\n=== LINKS ===\n");
    parsed.links.slice(0, 10).forEach((link, i) => {
    console.log(`${i}. ${link.text} → ${link.href}`);
    });
    rl.close();

 });