const cheerio=require("cheerio");

function parseHTML(html){
    const $=cheerio.load(html);
    $("script,style").remove();//removal of unwanted tags
    const text=$("body").text();
    //extraction of links
    const links=[];
    $("a").each((i,el)=>{
        const href=$(el).attr("href");
        const linkText=$(el).text.trim;
        if(href){
            links.push({
                text:linkText||"no text",
                href:href
            });
        }

    })
    return {
        text,
        links
    };

}
module.exports={parseHTML};