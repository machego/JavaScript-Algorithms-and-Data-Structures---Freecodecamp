function checkCashRegister(price, cash, cid) {
    let change = cash*100 - price*100 
    let totalCid = 0;
    for(let item of cid) {
      totalCid += item[1]*100
    }
    if(change > totalCid) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else if (change === totalCid) {
      return {status: "CLOSED", change: cid}
    } else {
      let result = []
      cid = cid.reverse()
      let units = {
  'ONE HUNDRED': (100*100),'TWENTY': (20*100),'TEN': (10*100), 
  'FIVE': (5*100), 'ONE': (1*100),'QUARTER': (0.25*100),'DIME':	(0.1*100),
  'NICKEL':	(0.05*100),'PENNY':	(0.01*100)
  }
  
  for(let item of cid) {
  let keepItem = [item[0], 0]
  item[1] = item[1]*100
  while (change >= units[item[0]] && item[1] > 0) {
    change -= units[item[0]]
    item[1] -= units[item[0]]
    keepItem[1] += units[item[0]]/100
   }
   if(keepItem[1] > 0) {
     result.push(keepItem)
   }
  }
  if (change > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  return {status: "OPEN", change: result}
    }
  }
  
  
    
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], 
  ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
       
   
