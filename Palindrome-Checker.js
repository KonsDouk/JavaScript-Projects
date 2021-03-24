function palindrome(str) {
   //var re = /(\d+)(\d{3})/;
   //return num.replace(re, "$2$1");

    //var re = /\s+[^\d+\/^\w+]/g;
    var re = /[^a-z0-9]/gi;
    var str1 = str.replace(re, "");
    var str2 = str1.split("");
    str2.reverse();
    str2 = str2.join("");
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    //return str1;

    if (str1 == str2){
      return true;
    }
    return false;
}



console.log(palindrome("1A man, a plan, a canal. Panama1"));