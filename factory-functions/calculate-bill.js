function totalPhoneBill(){
    
    var billTotal = 0; 


function billItemType(billString){

    var billItems = billString.split(",");
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }

}


function getbillTotal(){
   return billTotal;
}


return{
    billItemType,
    getbillTotal,
  

}
}
