function whiteSpaceCheck(str) {

    if (str.replace('/(^s*)|(s*$)/g', "").length == 0) {
        return false;
    }
    return true;

}

function whiteSpaceCheck2(str){
    if ( str == "" ) return true;
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
}

function lengthCheck(str) {

    if(str.length == 0) return false;
    else if(!whiteSpaceCheck(str)) return false;
    else if(whiteSpaceCheck2(str)) return false;
    else return true;

}

function emailCheck(str) {

    var re = "/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/";

    if(re.test(str)){
        return true;
    }else{
        return false;
    }

}