function rot13(str) { // LBH QVQ VG!
  let arr = [];
  let finalArr = [];
  for (let i=0; i<str.length; i++){
    if (str.charCodeAt(i) < 65 || !str.charCodeAt(i) > 90){
      arr.push(str.charCodeAt(i));
    }else if (str.charCodeAt(i) < 78){
        arr.push(str.charCodeAt(i) + 13)
      }else {
        arr.push(str.charCodeAt(i) - 13)
      }
    }
  

  for (let i=0; i<arr.length; i++){
    finalArr.push(String.fromCharCode(arr[i]))
  }
  return finalArr.join("");
}

// Change the inputs below to test
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT"));