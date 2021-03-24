function convertToRoman(num) {
    var roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII","IX", "X", "XL", "L", "LX","LXX","LXXX", "XC", "C", "CD", "D","DC","DCC","DCCC", "CM", "M" ];
    var decim = [ 1,   2,     3,    4,    5,   6,    7,      8,     9,   10,   40,  50,   60,  70,   80,    90,  100,  400, 500, 600,  700, 800,   900, 1000];
    var arr  = [];
    var strNum = num.toString();

    for (let i=0; i<strNum.length; i++){
        switch (true){
            case (strNum.length-i >= 4):
            for (let j=1; j<=strNum[i]; j++){
                arr.push(roman[decim.indexOf(1000)]);
            }
            break;

            case (strNum.length-i === 3):
            if (decim.indexOf(strNum[i]*100) === -1){
                for (let j=1; j<=strNum[i]; j++){
                    arr.push(roman[decim.indexOf(100)]);
                }
            }
            else{
                arr.push(roman[decim.indexOf(strNum[i]*100)]);
            }
            break;

            case (strNum.length-i === 2):
            if (decim.indexOf(strNum[i]*10) === -1){
                for (let j=1; j<=strNum[i]; j++){
                     arr.push(roman[decim.indexOf(10)]);
                }
            }else{
                  arr.push(roman[decim.indexOf(strNum[i]*10)]);
            }
            break;

            case (strNum.length-i === 1):
            arr.push(roman[decim.indexOf(strNum[i]*1)]);
            break;      
                                
            
        }  
    }
    return arr.join("");
}

console.log(convertToRoman(1234));