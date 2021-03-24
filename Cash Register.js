var denoms = [
    {name: "ONE HUNDRED", val:100},
      {name: "TWENTY", val:20},
        {name: "TEN", val:10},
          {name: "FIVE", val:5},
            {name: "ONE", val:1},
              {name: "QUARTER", val:0.25},
                {name: "DIME", val:0.10},
                  {name: "NICKEL", val:0.05},
                    {name: "PENNY", val:0.01},
];


function checkCashRegister(price, cash, cid) {
  let change = cash*100 - price*100;
  let arr;
  let sum;
  let finalArr = [];
  let change1 = change;
  let a;
  let b = 0;
  cid = cid.reverse();
  let obj = {status:null, change: []};


  let cidSum = 0;
  cid.forEach(function(x){
    cidSum += x[1]*100;
  });

  for (let i=0; i<denoms.length; i++){
    a = Math.ceil(cid[i][1]*100);
    //console.log(a);
    arr = [];
    sum = 0;
    while (change1 >= denoms[i].val*100 && a >0){
      b += a;
      arr = [denoms[i].name];
      sum += denoms[i].val*100;
      change1 -= denoms[i].val*100;
      a = a - denoms[i].val*100;
      arr.push(sum);
    }
    finalArr.push(arr);
  }

  let filteredFinal = finalArr.filter(function(item){
    return item != "";
  });

  filteredFinal.forEach(function(x){
    x[1] /= 100;
  });

  if (cidSum < change || b < change){
    obj.status = "INSUFFICIENT_FUNDS";
    return obj;
  }else if (change === cidSum){
    obj.status = "CLOSED";
    obj.change = cid.reverse();
    return obj;
  }else {
    obj.status = "OPEN";
    obj.change = filteredFinal;
    return obj;
  }
  
}



console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));