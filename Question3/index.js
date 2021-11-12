function findFirstStringInBracket(str){
    if(str.indexOf("(")>-1&&str.indexOf(")")>-1&&typeof(str)==="string"){
        return str.substring(str.indexOf("(")+1,str.indexOf(")"));
    }else{
        return "";
    }
}
console.log(findFirstStringInBracket("(Stockbit) Awesome (TRADING)"));

